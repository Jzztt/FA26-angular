import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Lifecycle } from './lifecycle/lifecycle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet,Lifecycle, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  protected readonly title = signal('angular-project');
  information: {
    name: string;
    age: number;
    address: string;
    email: string;
  } = {
      name: 'John Doe',
      age: 30,
      address: "123 Main St, Anytown, USA",
      email: "john.doe@example.com"
    }
  count = signal(0);
  increment() {
    this.count.update((value) => value + 1);
  }


  isShow = false;
  lessionName = "Angular";

  toggleShow() {
    this.isShow = !this.isShow;
  }

}
