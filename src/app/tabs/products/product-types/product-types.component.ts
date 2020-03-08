import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.scss'],
})
export class ProductTypesComponent implements OnInit {

  public category: string = "";

  constructor(private productService: ProductsService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.category= this.router.snapshot.paramMap.get('productTypes');
    this.loadProducts(this.category.toLowerCase());
  }

  loadProducts(category:string){
    this.productService.getProductsByCategory(category).subscribe(_productType => {
      console.log(_productType);
    });
    
  }

}
