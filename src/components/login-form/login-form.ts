import { Account } from '../../models/accounts/account.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoginResponse } from '../../models/login/login-response.interface';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserCredential } from '@firebase/auth-types';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;

  @Output() loginStatus: EventEmitter<UserCredential>;

  constructor(
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private authProvider: AuthProvider) {

    this.loginStatus = new EventEmitter<UserCredential>();
  }

  goToRegisterPage() {

    this.navCtrl.push('RegisterPage');

  }

  async login() {

    const loginResponse: UserCredential = await this.authProvider.signInWithEmailAndPassword(this.account);

    this.loginStatus.emit(loginResponse);

  }

}
