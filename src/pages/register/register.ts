import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { UserCredential } from '@firebase/auth-types';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController) {
  }

  register(event: UserCredential | Error) {

    console.log(event);

    if (!event['code']) {

      this.toastCtrl.create({
        message: `Successfully created account ${event['user'].email} !`,
        duration: 3000,
      }).present();

    } else {

      this.toastCtrl.create({
        message: event['message'],
        duration: 3000,
      }).present();

    }

  }


}
