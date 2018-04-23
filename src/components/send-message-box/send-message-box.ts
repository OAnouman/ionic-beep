import { Component, Output, EventEmitter } from '@angular/core';
import { ChannelMessage } from '../../models/channels/channel-message.interface';

/**
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'send-message-box',
  templateUrl: 'send-message-box.html'
})
export class SendMessageBoxComponent {


  @Output() sendMessage: EventEmitter<ChannelMessage>;

  message = {} as ChannelMessage;

  constructor() {
    this.sendMessage = new EventEmitter<ChannelMessage>();
  }

  send(message: ChannelMessage) {

    this.sendMessage.emit(this.message);
    this.message.text = "";

  }

}
