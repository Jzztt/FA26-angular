import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // two-way data binding
  // Dữ liệu được truyền từ component sang view => 1 chiều
  // Dữ liệu được truyền từ view sang component => 1 chiều
  // => tổng hợp lại => 2 chiều
  message: string = 'Hello, Angular!';
  isLogin: boolean = false;
  items = ['Apple', 'Banana', 'Orange'];
  //  Atribute binding
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  loginSystem() {
    this.isLogin=!this.isLogin
  }
}
