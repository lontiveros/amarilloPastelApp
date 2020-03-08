import { Component, OnInit, Input } from '@angular/core';
import { ProductTypes } from 'src/app/interfaces/product-types';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {

  @Input() product: ProductTypes;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
