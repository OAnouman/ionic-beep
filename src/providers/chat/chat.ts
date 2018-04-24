import { Injectable } from '@angular/core';
import { User } from '@firebase/auth-types';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { ChannelMessage } from '../../models/channels/channel-message.interface';
import { Channel } from '../../models/channels/channel.interface';
import { Message } from '../../models/message/message.interface';
import { AuthProvider } from '../auth/auth';


/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {

  constructor(
    private database: AngularFireDatabase,
    private authProvider: AuthProvider) {
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

  async sendChatMessage(message: Message) {

    await this.database.list('messages').push(message);

  }


  getChatsMessages(userToId: string) {

    return this.authProvider.getAuthenticatedUser()
      .map((user: User) => user.uid)
      .mergeMap((uid: string) => this.database.list(`user-messages/${uid}/${userToId}`).snapshotChanges())
      .mergeMap(chatsMessages => {

        return Observable.forkJoin(
          chatsMessages.map(message => this.database.object(`messages/${message.key}`).valueChanges()),
          (...vals: Message[]) => {
            console.log(vals);
            return vals;
          }
        )

      });

  }

}
