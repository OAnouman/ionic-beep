import { NgModule } from '@angular/core';
// Google firebase
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicModule } from 'ionic-angular';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { FormsModule } from '@angular/forms';
import { ProfileViewComponent } from './profile-view/profile-view';




@NgModule({
	declarations: [
		LoginFormComponent,
		RegisterFormComponent,
		EditProfileFormComponent,
    ProfileViewComponent],

	imports: [
		IonicModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		FormsModule],

	exports: [
		LoginFormComponent,
		RegisterFormComponent,
		EditProfileFormComponent,
    ProfileViewComponent]
})
export class ComponentsModule { }
