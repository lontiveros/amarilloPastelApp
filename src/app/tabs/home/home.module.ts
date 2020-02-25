import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		RouterModule.forChild([
			{ path: '', component: HomeComponent }
		])
	]
})
export class HomeModule { }
