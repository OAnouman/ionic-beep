import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/user/user.interface';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private existingProfile: Profile;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private authProvider: AuthProvider) {
  }

  getExistingProfile(profile: Profile): void {

    this.existingProfile = profile;

  }

  goToEditProfilePage(): void {

    this.navCtrl.push('EditProfilePage', {
      profile: this.existingProfile
    });

  }

  async logout() {

    await this.authProvider.signOut();
    this.navCtrl.setRoot('LoginPage');

  }

}
