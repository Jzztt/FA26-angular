import { Component } from '@angular/core';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'app-products',
  imports: [ProductDetail],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productName: string = "Iphone 15"
  message : string = ''
  onBuy() {
    this.message = 'Bạn đã mua Hàng'
  }
}
