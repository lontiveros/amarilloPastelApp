import { Component, Input, ViewChild } from '@angular/core';
import { ProductTypes } from 'src/app/interfaces/product-types';
import { ModalController, IonSlides } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
	selector: 'app-products-details',
	templateUrl: './products-details.component.html',
	styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent {

	@Input() product: ProductTypes;
	@ViewChild(IonSlides, { static: false }) slider: IonSlides;

	constructor(
		private cartService: CartService,
		private modalController: ModalController
	) {}

	ionViewWillEnter() {
		this.slider.update();
	}

	closeModal() {
		this.modalController.dismiss();
	}

	addToCart(product) {
		this.cartService.addItem(product, 1);
	}
}
