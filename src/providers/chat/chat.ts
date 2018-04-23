import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Channel } from '../../models/channels/channel.interface';
import { ChannelMessage } from '../../models/channels/channel-message.interface';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {

  constructor(private database: AngularFireDatabase) {
  }


  addChannel(channelName: string) {

    this.database.list('channels').push({ name: channelName });

  }

  getChannelsRef(): AngularFireList<Channel> {

    return this.database.list('channels');

  }

  getChannelChatRef(channelKey: string) {

    return this.database.list<ChannelMessage>(`channels-messages/${channelKey}`)

  }

  sendChannelChatMessage(channelKey: string, message: ChannelMessage) {

    this.database.list(`channels-messages/${channelKey}`).push({
      text: message.text,
    })

  }

}
