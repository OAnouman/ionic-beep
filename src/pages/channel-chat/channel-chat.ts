import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataSnapshot } from '@firebase/database';
import { ChatProvider } from '../../providers/chat/chat';
import { Observable } from '@firebase/util';
import { ChannelMessage } from '../../models/channels/channel-message.interface';
import { AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: DataSnapshot;

  channelsMessagesRef: AngularFireList<ChannelMessage>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private chatProvider: ChatProvider) {
  }

  ionViewWillLoad() {

    this.channel = this.navParams.get('channel');

    this.channelsMessagesRef = this.chatProvider.getChannelChatRef(this.channel['payload'].key);

  }

  sendMessage(message: ChannelMessage) {

    this.chatProvider.sendChannelChatMessage(this.channel['payload'].key, message);

  }

}
