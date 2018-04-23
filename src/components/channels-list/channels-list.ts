import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Channel } from '../../models/channels/channel.interface';
import { DataSnapshot } from '@firebase/database-types';

/**
 import { AsyncPipe } from '@angular/common';
 * Generated class for the ChannelsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'channels-list',
  templateUrl: 'channels-list.html'
})
export class ChannelsListComponent {

  @Input() channelsList: Observable<any[]>;

  @Output() selectedChannel: EventEmitter<DataSnapshot>;

  constructor() {

    this.selectedChannel = new EventEmitter<DataSnapshot>();

  }

  selectChannel(channel: DataSnapshot): void {

    this.selectedChannel.emit(channel);

  }

}
