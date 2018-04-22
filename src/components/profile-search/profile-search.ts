import { Component, Output, EventEmitter } from '@angular/core';
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


  @Output() selectedProfile: EventEmitter<Profile>;

  query: string;

  profilesList: Profile[];

  constructor(
    private dataProvider: DataProvider) {

    this.profilesList = new Array<Profile>();

    this.selectedProfile = new EventEmitter<Profile>();

  }


  selectProfile(profile: Profile) {

    this.selectedProfile.emit(profile);

  }

  searchProfile(query: string): void {

    const trimmedQuery = query.trim();

    if (trimmedQuery && trimmedQuery === query) {
      this.dataProvider.searchProfile(trimmedQuery).subscribe((profiles: Profile[]) => this.profilesList = profiles);
    }

  }

}
