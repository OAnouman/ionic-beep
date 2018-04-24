import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/user/user.interface';
import { DataSnapshot } from '@firebase/database-types';

/**
 * Generated class for the UserSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-search',
  templateUrl: 'user-search.html',
})
export class UserSearchPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  openChat(profile: DataSnapshot) {

    this.navCtrl.push('MessagePage', { profile });

  }

}
