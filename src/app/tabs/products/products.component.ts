import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/domain/Product';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
	public products: Array<Product> = [];
	private loading;

	constructor(
		private productService: ProductsService,
		private loadingController: LoadingController
	) { }
	
	ionViewWillEnter() {
		this.initLoading();
		this.loadProducts();
	}
	
	loadProducts() {
		this.productService.getProducts().subscribe(_product => {
			this.products = _product;
			this.loadingController.dismiss();
		});
	}

	async initLoading() {
		this.loading = await this.loadingController.create({
			spinner: "circles",
			message: "Obteniendo el listado de productos.",
			translucent: false
		});

		await this.loading.present();
	}

}
