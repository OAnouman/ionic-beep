import { Injectable } from '@angular/core';
import { User } from '@firebase/auth-types';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import 'rxjs/Observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import { Profile } from '../../models/user/user.interface';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private profileObject: AngularFireObject<Profile>;

  private profileList: AngularFireList<Profile>;

  constructor(
    private database: AngularFireDatabase,
    private authProvider: AuthProvider) {
  }

  searchProfile(firstName: string): Observable<{}[]> {

    const query = this.database.list('/profiles', (profileList$ => {

      return profileList$.orderByChild('firstName')
        .equalTo(firstName);

    }));

    return query.valueChanges().take(1);

  }

  getProfile(user: User) {

    if (user) {

      this.profileObject = this.database.object(`/profiles/${user.uid}`);

      return this.profileObject.valueChanges().take(1);

    }

    return null;

  }


  async saveProfile(user: User, profile: Profile): Promise<boolean> {

    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try {

      profile.email = user.email;

      await this.profileObject.set(profile);

      return true;

    } catch (e) {

      return false;

    }

  }

  getAuthenticatedUserProfile() {

    return this.authProvider.getAuthenticatedUser()
      .map(user => user.uid)
      .mergeMap(uid => this.database.object(`profiles/${uid}`).valueChanges())
      .take(1);

  }

}
