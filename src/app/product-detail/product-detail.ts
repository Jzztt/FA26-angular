import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  name = input<string>();
  buy = output<void>();

  sendData() {
    // gọi hàm buy
    this.buy.emit();
  }

}
