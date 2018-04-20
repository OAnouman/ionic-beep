import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '@firebase/auth-types';
import { Profile } from '../../models/user/user.interface';
import { LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit {


  userProfile: Profile;

  private loader: Loading;

  constructor(
    private dataProvider: DataProvider,
    private authProvider: AuthProvider,
    private laodingCtrl: LoadingController) {

    this.loader = this.laodingCtrl.create({
      content: 'Loading profile...',
    })

  }


  ngOnInit(): void {

    this.loader.present();

    this.authProvider.getAuthenticatedUser().subscribe((user: User) => {

      this.dataProvider.getProfile(user).subscribe((profile: Profile) => {

        this.userProfile = profile;

        this.loader.dismiss();

      });

    });

  }


}
