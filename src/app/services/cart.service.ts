import { Injectable } from '@angular/core';
import { Product } from '../domain/Product';
import { ProductTypes } from '../interfaces/product-types';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../domain/Cart';

@Injectable({
  	providedIn: 'root'
})
export class CartService {
	private cartItems: Array<CartItem> = [];
	private cart: Cart = new Cart;

	constructor() { }

	getCartItemsList(): Array<CartItem> {
		return this.cartItems;
	}

	getCartItemsCount(): number {
		return this.cartItems.length;
	}

	getCart(): Cart {
		return this.cart;
	}

	addItem(item: Product, itemAmount: number) {
		let cartItem = new CartItem;
		cartItem.id = item.id;
		cartItem.name = item.title;
		cartItem.price = item.price;
		cartItem.amount = itemAmount;
		this.cartItems.push(cartItem);
	}

	// TODO: Implementar edición de un item del carrito.
	editItem(itemId: string, itemQuantity: number) {}

	// TODO: Implementar la eliminación de un item del carrito.
	removeItem(itemId: string) {}

	clearCart() {
		this.cart = new Cart;
		this.cartItems = [];
	}
}
