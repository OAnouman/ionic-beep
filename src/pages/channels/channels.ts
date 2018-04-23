import { Component } from '@angular/core';
import { DataSnapshot } from '@firebase/database';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ChatProvider } from '../../providers/chat/chat';

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelsList: Observable<any[]>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private chatProvider: ChatProvider) {
  }

  ionViewWillLoad() {

    this.getChannels();

  }

  getChannels() {

    this.channelsList = this.chatProvider.getChannelsRef().snapshotChanges();

  }

  selectChannel(channelSnapshot: DataSnapshot) {

    this.navCtrl.push('ChannelChatPage', { channel: channelSnapshot });

  }

  showAddChannelDialog(): void {

    this.alertCtrl.create({

      title: 'Channel name',
      inputs: [{
        name: 'channelName',
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Add',
        handler: (data) => {

          this.chatProvider.addChannel(data.channelName);

        }
      }]

    }).present();

  }

}
