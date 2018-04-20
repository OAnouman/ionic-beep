import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/user/user.interface';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile: Profile;

  constructor(private navCtrl: NavController, private navParams: NavParams) {

    this.profile = navParams.get('profile');

  }


  goToTabsPage(event: Boolean) {

    event ? this.navCtrl.setRoot('TabsPage') : console.log('Not authenticated or not saved !');

  }

}
