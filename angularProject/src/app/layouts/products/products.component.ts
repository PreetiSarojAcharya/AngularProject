import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `<div class="container">
    <div class="section">
      <ul>
        <li *ngFor="let mobPart of mobParts">
          <div class="col s12 m7">
            <div class="card">
              <div class="card-image">
                <img src="../../../assets/img/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  Mobile Part ID : <b>{{ mobPart.id }}</b>
                </p>

                <div [style.color]="mobPart.prodColor">
                  45 Mobile Part Name :
                  <b
                    ><i> {{ mobPart.name | uppercase }}</i></b
                  >
                </div>

                <div>
                  Description : <q>{{ mobPart.description }}</q>
                </div>

                <ng-container
                  *ngIf="mobPart.inStock != 0; then stockbval; else notstockval"
                ></ng-container>

                <ng-template #stockbval
                  ><mark>{{ mobPart.inStock }}</mark> Parts Available in stock
                  now...</ng-template
                >
                <ng-template #notstockval>Out of stock</ng-template>

                <div
                  [ngStyle]="{
                    display: mobPart.canPurch === true ? 'inline-block' : 'none'
                  }"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/2000px-Green_sphere.svg.png"
                    width="16"
                  />
                </div>

                <div *ngIf="mobPart.inStock > 0">
                  Last <mark>{{ mobPart.inStock }}</mark> Parts Available in
                  stock now...
                </div>
                <div *ngIf="mobPart.inStock == 0">
                  OutOfstock..
                </div>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>`,
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
      id: 1001,
      name: 'ScreenPreeti 5.5',
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
