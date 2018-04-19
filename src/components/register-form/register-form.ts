import { Account } from '../../models/accounts/account.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoginResponse } from '../../models/login/login-response.interface';
import { UserCredential } from '@firebase/auth-types';


/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  @Output() registerStatus: EventEmitter<UserCredential>;

  constructor(
    private afAuth: AngularFireAuth,
    private authProvider: AuthProvider) {

    this.registerStatus = new EventEmitter<UserCredential>();

  }


  async register() {

    try {

      const registerResponse: UserCredential = await this.authProvider.createUserWithEmailAndPassword(this.account);

      this.registerStatus.emit(registerResponse);

    } catch (e) {

      this.registerStatus.emit(e);

    }

  }

}
