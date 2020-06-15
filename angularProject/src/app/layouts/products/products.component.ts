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

  mobParts = [
    {
      cardtitle: 'Chef baby',
      id: 1001,
      name: 'ScreenPreeti 5.5',
      description: '5.5 Screen for Moto g',
      inStock: 5,
      prodColor: 'red',
      canPurch: true,
      imagepath: '../../../assets/img/_PP08880.jpg',
    },
    {
      cardtitle: 'Nature',
      id: 1002,
      name: 'Screen 5',
      description: '5 Screen for Samsung',
      inStock: 8,
      prodColor: 'green',
      canPurch: false,
      imagepath: '../../../assets/img/sample-1.jpg',
    },
    {
      cardtitle: 'Office',
      id: 1003,
      name: 'key panel',
      description: 'Key panel for Nokia',
      inStock: 0,
      prodColor: 'blue',
      canPurch: true,
      imagepath: '../../../assets/img/office.jpg',
    },
  ];
}
