import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicModule } from 'ionic-angular';
import { MomentModule } from "ngx-moment";
import { ChannelsListComponent } from './channels-list/channels-list';
import { ChatMessageComponent } from './chat-message/chat-message';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { LoginFormComponent } from './login-form/login-form';
import { ProfileSearchComponent } from './profile-search/profile-search';
import { ProfileViewComponent } from './profile-view/profile-view';
import { RegisterFormComponent } from './register-form/register-form';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';
import { ChannelChatMessageListComponent } from './channel-chat-message-list/channel-chat-message-list';
import { OnlineUsersListComponent } from './online-users-list/online-users-list';


@NgModule({
	declarations: [
		LoginFormComponent,
		RegisterFormComponent,
		EditProfileFormComponent,
		ProfileViewComponent,
		ProfileSearchComponent,
		SendMessageBoxComponent,
		ChatMessageComponent,
		ChannelsListComponent,
    ChannelChatMessageListComponent,
    OnlineUsersListComponent],

	imports: [
		IonicModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		FormsModule,
		MomentModule],

	exports: [
		LoginFormComponent,
		RegisterFormComponent,
		EditProfileFormComponent,
		ProfileViewComponent,
		ProfileSearchComponent,
		SendMessageBoxComponent,
		ChatMessageComponent,
		ChannelsListComponent,
    ChannelChatMessageListComponent,
    OnlineUsersListComponent]
})
export class ComponentsModule { }
