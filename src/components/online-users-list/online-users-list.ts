import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { Profile } from '../../models/user/user.interface';
import { Observable } from 'rxjs/Observable';
import { AsyncPipe } from "@angular/common";
import { NavController } from 'ionic-angular';
import { DataSnapshot } from '@firebase/database-types';
import { AngularFireAction } from 'angularfire2/database';

/**
 * Generated class for the OnlineUsersListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'online-users-list',
  templateUrl: 'online-users-list.html'
})
export class OnlineUsersListComponent implements OnInit {


  onlineUsersList: Observable<AngularFireAction<DataSnapshot>[]>;

  constructor(
    private dataProvider: DataProvider,
    private navCtrl: NavController) {

  }

  setUserOnline() {

    this.dataProvider.getAuthenticatedUserProfileSnapshot().subscribe(async profileSnapshot => {
      await this.dataProvider.setUserOnline(profileSnapshot);
      this.getOnlineUsers();
    });

  }

  getOnlineUsers(): void {

    this.onlineUsersList = this.dataProvider.getOnlineUsers();

  }

  ngOnInit(): void {
    this.setUserOnline();
  }

  openChat(profile: AngularFireAction<DataSnapshot>) {

    this.navCtrl.push('MessagePage', { profile });

  }

}
