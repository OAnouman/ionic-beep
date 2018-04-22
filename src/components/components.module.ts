import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicModule } from 'ionic-angular';
import { MomentModule } from "ngx-moment";
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { LoginFormComponent } from './login-form/login-form';
import { ProfileViewComponent } from './profile-view/profile-view';
import { RegisterFormComponent } from './register-form/register-form';
import { ProfileSearchComponent } from './profile-search/profile-search';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';
import { ChatMessageComponent } from './chat-message/chat-message';


@NgModule({
	declarations: [
		LoginFormComponent,
		RegisterFormComponent,
		EditProfileFormComponent,
		ProfileViewComponent,
		ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent],

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
    ChatMessageComponent]
})
export class ComponentsModule { }
