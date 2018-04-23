import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChannelMessage } from '../../models/channels/channel-message.interface';
import { AngularFireList } from 'angularfire2/database';
import { AsyncPipe } from "@angular/common";

/**
 * Generated class for the ChannelChatMessageListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'channel-chat-message-list',
  templateUrl: 'channel-chat-message-list.html'
})
export class ChannelChatMessageListComponent implements OnInit {


  @Input() channelMessagesListRef: AngularFireList<ChannelMessage>;

  channelMessages$: Observable<ChannelMessage[]>;

  constructor() {

  }

  ngOnInit(): void {
    this.channelMessages$ = this.channelMessagesListRef.valueChanges();
  }


}
