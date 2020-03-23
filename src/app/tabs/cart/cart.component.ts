import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart, CartItem } from 'src/app/domain/Cart';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
	public cartItems: Array<CartItem> = [];

	constructor(
		private cartService: CartService
	) { }

	ionViewWillEnter() {
		this.cartItems = this.cartService.getCartItemsList();
	}
}
