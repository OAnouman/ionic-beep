import { Injectable } from '@angular/core';

// Google firebase

import { AngularFireAuth } from "angularfire2/auth";
import { Account } from '../../models/accounts/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';
import { UserCredential, User } from '@firebase/auth-types';
import { Observable } from 'rxjs/observable';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth) {

  }


  async signOut() {

    await this.afAuth.auth.signOut();

  }

  async createUserWithEmailAndPassword(credentials: Account) {

    try {

      return <UserCredential>await this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(credentials.email, credentials.password);

    } catch (e) {

      return e;

    }

  }

  async signInWithEmailAndPassword(credentials: Account) {

    try {

      return <UserCredential>await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(credentials.email, credentials.password);

    } catch (e) {

      return e;

    }

  }

  getAuthenticatedUser(): Observable<User> {

    return this.afAuth.authState;

  }

}
