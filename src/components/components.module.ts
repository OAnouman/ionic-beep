import { NgModule } from '@angular/core';
// Google firebase
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicModule } from 'ionic-angular';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';




@NgModule({
	declarations: [
		LoginFormComponent,
		RegisterFormComponent,
		EditProfileFormComponent],

	imports: [
		IonicModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule],

	exports: [
		LoginFormComponent,
		RegisterFormComponent,
		EditProfileFormComponent]
})
export class ComponentsModule { }
