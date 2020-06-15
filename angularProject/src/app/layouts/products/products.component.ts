import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // data and logic
  title = 'Angular Welcomes you..!';
  testdate = new Date(1985, 3, 21);
  arr = ['Pune', 'Hyderabad', 'Mumbai'];
  // console.log(arr);
}
