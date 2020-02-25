import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

@NgModule({
	declarations: [
		ProductsComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		RouterModule.forChild([
			{ path: '', component: ProductsComponent }
		])
	]
})
export class ProductsModule { }
