export class Cart {
    cartItems: Array<CartItem>;
    cartItemsCount: number;
    totalPrice: number;
}

export class CartItem {
    id: string;
    name: string;
    price: number;
    amount: number;
}