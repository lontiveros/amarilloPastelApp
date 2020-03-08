import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductTypes } from 'src/app/interfaces/product-types';
import { ModalController } from '@ionic/angular';
import { ProductsDetailsComponent } from '../products-details/products-details.component';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.scss'],
})
export class ProductTypesComponent implements OnInit {

  public category: string = "";
  public productTypes: Array<ProductTypes>=[];
  

  constructor(private productService: ProductsService,
              public modalController: ModalController,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.category= this.router.snapshot.paramMap.get('productTypes');
    this.loadProducts(this.category.toLowerCase());
  }

  loadProducts(category:string){
    this.productService.getProductsByCategory(category).subscribe(_productType => {
      //console.log(_productType);
      this.productTypes = _productType;
    });
    
  }

  async openModal(product: ProductTypes) {
    const modal = await this.modalController.create({
      component: ProductsDetailsComponent,
      componentProps: {
        'product': product
      }
    });
    return await modal.present();
  }

}
