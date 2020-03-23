import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  	declarations: [
		  CartComponent
	  ],
  	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{ path: '', component: CartComponent },
		])
	],
	providers: []
})
export class CartModule { }
