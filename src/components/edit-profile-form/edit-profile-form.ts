import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
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
export class EditProfileFormComponent implements OnDestroy, OnInit {

  private authenticatedUser$: Subscription;

  private authenticatedUser: User;

  @Input() profile = {} as Profile;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  constructor(private dataProvider: DataProvider, private authProvider: AuthProvider) {

    this.saveProfileResult = new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.authProvider.getAuthenticatedUser().subscribe((user: User) => this.authenticatedUser = user);

  }

  async saveProfile() {

    // Clean profile before saving 

    this.trim();

    if (this.authenticatedUser) {
      const result = await this.dataProvider.saveProfile(this.authenticatedUser, this.profile);

      this.saveProfileResult.emit(result);
    }

  }

  private trim() {

    Object.keys(this.profile).forEach((key: string) => {

      if (typeof this.profile[key] === 'string') {

        this.profile[key] = this.profile[key].trim();

      }

    })

  }

  ngOnDestroy(): void {

    this.authenticatedUser$.unsubscribe();

  }

  ngOnInit(): void {

    if (!this.profile) {
      this.profile = {} as Profile;
    }

  }

}
