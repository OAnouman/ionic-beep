import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { Profile } from '../../models/user/user.interface';
import { Observable } from 'rxjs/Observable';
import { AsyncPipe } from "@angular/common";

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


  onlineUsersList: Observable<Profile[]>;

  constructor(
    private dataProvider: DataProvider) {

  }

  setUserOnline() {

    this.dataProvider.getAuthenticatedUserProfileSnapshot().subscribe(async profileSnapshot => {
      await this.dataProvider.setUserOnline(profileSnapshot);
      this.getOnlineUsers();
    });

  }

  getOnlineUsers(): void {

    this.onlineUsersList = this.dataProvider.getOnlineUsers().valueChanges().take(1);

    this.onlineUsersList.subscribe(profile => console.log(profile));

  }

  ngOnInit(): void {
    this.setUserOnline();
  }

}
