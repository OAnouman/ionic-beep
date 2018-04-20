import { Component } from '@angular/core';
import { Profile } from '../../models/user/user.interface';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html'
})

export class ProfileSearchComponent {

  query: string;

  profilesList: Profile[];

  constructor(
    private dataProvider: DataProvider) {

    this.profilesList = new Array<Profile>();

  }


  startPrivateChat() {



  }

  searchProfile(query): void {

    if (query) {
      this.dataProvider.searchProfile(query).subscribe((profiles: Profile[]) => this.profilesList = profiles);
    } else {
      this.profilesList = new Array<Profile>();
    }

  }

}
