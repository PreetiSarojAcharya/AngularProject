import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `<mark>internal html</mark>`, // view : UI
  // styles: [
  //   `
  //     li {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  // data and logic
  title = 'Angular Welcomes you..!';

  arr = ['Pune', 'Hyderabad', 'Mumbai'];
  // console.log(arr);

  mobParts = [
    {
      id: 1001,
      name: 'Screen 5.5',
      description: '5.5 Screen for Moto g',
      inStock: 5,
      prodColor: 'red',
      canPurch: true,
    },
    {
      id: 1002,
      name: 'Screen 5',
      description: '5 Screen for Samsung',
      inStock: 8,
      prodColor: 'green',
      canPurch: false,
    },
    {
      id: 1003,
      name: 'key panel',
      description: 'Key panel for Nokia',
      inStock: 0,
      prodColor: 'blue',
      canPurch: true,
    },
  ];
}

// static web App  :  const data
// Dynamic Web App :  data with var
// { }    : res for obj, block
// {{ }}  : interpolation : [ data binding ] to print var
//   '' -> ``
