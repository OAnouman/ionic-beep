import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/user/user.interface';
import { MESSAGES_LIST } from '../../mocks/messages/messages';
import { Message } from '../../models/message/message.interface';

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

  selectedProfile: Profile;

  messageList: Message[];

  constructor(private navCtrl: NavController, private navParams: NavParams) {

    this.messageList = MESSAGES_LIST;

  }

  ionViewWillLoad() {

    this.selectedProfile = this.navParams.get('profile');

  }


}
