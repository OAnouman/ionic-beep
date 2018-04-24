import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message/message.interface';
import { Profile } from '../../models/user/user.interface';
import { AngularFireAction } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent implements OnInit {

  @Input() chatMessage: Message;

  @Input() userProfile: AngularFireAction<DataSnapshot>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
