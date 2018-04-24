import { Component, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/user/user.interface';
import { DataProvider } from '../../providers/data/data';
import { DataSnapshot } from '@firebase/database-types';
import { AngularFireAction } from 'angularfire2/database';

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


  @Output() selectedProfile: EventEmitter<DataSnapshot>;

  query: string;

  profilesList: DataSnapshot[];

  constructor(
    private dataProvider: DataProvider) {

    this.profilesList = [] as DataSnapshot[];

    this.selectedProfile = new EventEmitter<DataSnapshot>();

  }


  selectProfile(profile: DataSnapshot) {

    this.selectedProfile.emit(profile);

  }

  searchProfile(query: string): void {

    const trimmedQuery = query.trim();

    if (trimmedQuery && trimmedQuery === query) {
      this.dataProvider.searchProfile(trimmedQuery).subscribe((profiles: DataSnapshot[]) => this.profilesList = profiles);
    }

  }

}
