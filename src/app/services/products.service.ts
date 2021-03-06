import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from "rxjs/operators";
import { ProductTypes } from '../interfaces/product-types';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	private products: Observable<any[]>;
	private productsCollection: AngularFirestoreCollection<any>;

	constructor(
		private firestore: AngularFirestore
	) {
		this.productsCollection = this.firestore.collection<any>('products');
		this.products = this.productsCollection.snapshotChanges().pipe(
			map(actions => {
				return actions.map(action => {
					const data = action.payload.doc.data();
					const id = action.payload.doc.id;
					return { id, ...data };
				});
			})
		);
	}

	getProducts() : Observable<any[]> {
		return this.products;
	}

	getProductsByCategory(category:string): Observable<ProductTypes[]> {
		let productCategoryCollection = this.firestore.collection<any>(category);
		let products = productCategoryCollection.snapshotChanges().pipe(
			map(actions => {
				return actions.map(action => {
					const data = action.payload.doc.data();
					const id = action.payload.doc.id;
					return { id, ...data };
				});
			})
		);

		return products;
	}
}
