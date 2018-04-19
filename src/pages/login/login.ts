import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { UserCredential } from '@firebase/auth-types';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private toasrController: ToastController,
    private dataProvider: DataProvider) {
  }


  login(event: UserCredential): void {

    if (!event['code']) {

      this.toasrController.create({
        message: `Welcome to Beep ${event['user'].email}`,
        duration: 3000,
      }).present();

      this.dataProvider.getProfile(event.user).subscribe(profile => profile ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage'));


    } else {

      this.toasrController.create({
        message: `${event['message']}`,
        duration: 3000,
      }).present();

    }

  }

}
