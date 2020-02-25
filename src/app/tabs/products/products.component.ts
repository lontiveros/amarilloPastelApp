import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
	public products: Observable<any[]>;

	constructor(
		private productService: ProductsService
	) { }

	ngOnInit() {}

	ionViewWillEnter() {
		this.loadProducts();
	}

	loadProducts() {
		this.products = this.productService.getProducts();
	}

}
