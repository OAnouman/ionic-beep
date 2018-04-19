import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabInboxRoot: string;
  tabChannelsRoot: string;
  tabProfileRoot: string;

  constructor() {

    this.tabInboxRoot = 'InboxPage'

    this.tabChannelsRoot = 'ChannelsPage';

    this.tabProfileRoot = 'ProfilePage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
