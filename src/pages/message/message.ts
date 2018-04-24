import { Component } from '@angular/core';
import { DataSnapshot } from '@firebase/database-types';
import { AngularFireAction } from 'angularfire2/database';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../models/message/message.interface';
import { ChatProvider } from '../../providers/chat/chat';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: DataSnapshot;

  userProfile: AngularFireAction<DataSnapshot>;

  messagesList: Observable<Message[]>;



  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private dataProvider: DataProvider,
    private chatProvider: ChatProvider) {

  }

  ionViewWillLoad() {

    this.selectedProfile = this.navParams.get('profile');

    this.messagesList = this.chatProvider.getChatsMessages(this.selectedProfile.key);

    this.messagesList.subscribe(messages => console.log(messages));

    this.dataProvider.getAuthenticatedUserProfileSnapshot().subscribe((profile: AngularFireAction<DataSnapshot>) => this.userProfile = profile);

  }

  async sendMessage(text: string) {

    try {

      const message: Message = {

        text: text,

        userToId: this.selectedProfile.key,

        userToProfile: {
          lastName: this.selectedProfile['payload'].val().lastName,
          firstName: this.selectedProfile['payload'].val().firstName,
        },

        userFromId: this.userProfile.key,

        userFromProfile: {
          lastName: this.userProfile.payload.val().lastName,
          firstName: this.userProfile.payload.val().firstName,
        }

      }

      await this.chatProvider.sendChatMessage(message);

    } catch (e) {

      console.log(e);

    }

  }


}
