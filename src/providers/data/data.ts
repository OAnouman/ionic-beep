import { Injectable } from '@angular/core';
import { User } from '@firebase/auth-types';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { Profile } from '../../models/user/user.interface';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private profileObject: AngularFireObject<Profile>;

  private profileList: AngularFireList<Profile>;

  constructor(private database: AngularFireDatabase) {
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

      console.log(e);

      return false;

    }

  }

}
