import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle {
  @Input() name: string = '';


  constructor() {
    console.log('Lifecycle component initialized');
  }
  ngOnChanges() {
    console.log('Lifecycle component ngOnChanges called');
  }
  ngOnInit() {
    console.log('Lifecycle component ngOnInit called');
  }
  ngOnDestroy() {
    console.log('Lifecycle component ngOnDestroy called');
  }
}
