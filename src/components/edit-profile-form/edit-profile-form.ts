import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { User } from '@firebase/auth-types';
import { Subscription } from 'rxjs/Subscription';
import { Profile } from '../../models/user/user.interface';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnDestroy {


  private authenticatedUser$: Subscription;

  private authenticatedUser: User;

  profile = {} as Profile;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  constructor(private dataProvider: DataProvider, private authProvider: AuthProvider) {

    this.saveProfileResult = new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.authProvider.getAuthenticatedUser().subscribe((user: User) => this.authenticatedUser = user);

  }

  async saveProfile() {

    if (this.authenticatedUser) {
      const result = await this.dataProvider.saveProfile(this.authenticatedUser, this.profile);

      this.saveProfileResult.emit(result);
    }

  }

  ngOnDestroy(): void {

    this.authenticatedUser$.unsubscribe();

  }

}
