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

	get cartItemsList(): Array<CartItem> {
		return this.cartItems;
	}

	get cartItemsCount(): number {
		return this.cartItems.length;
	}

	get currentCart(): Cart {
		return this.cart;
	}

	addItem(item: CartItem) {
		this.cartItems.push(item);
	}

	// TODO: Implementar edición de un item del carrito.
	editItem(itemId: string, itemQuantity: number) {}

	// TODO: Implementar la eliminación de un item del carrito.
	removeItem(itemId: string) {}
}
