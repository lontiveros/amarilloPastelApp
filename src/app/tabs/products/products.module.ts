import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductTypesComponent } from './product-types/product-types.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

@NgModule({
	declarations: [
		ProductsComponent,
		ProductTypesComponent,
		ProductsDetailsComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		RouterModule.forChild([
			{ path: '', component: ProductsComponent },
			{ path: 'details/:productTypes', component: ProductTypesComponent },
		])
	],
	entryComponents: [
		ProductsDetailsComponent
	]
})
export class ProductsModule { }
