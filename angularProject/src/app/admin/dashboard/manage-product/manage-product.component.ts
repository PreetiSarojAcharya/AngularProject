import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Productmodel } from './../../../Model/productmodel';

@Component({
  selector: 'app-manage-product',
  template: `
    <h1>Product Detail</h1>
    <button class="btn btn-danger" style="width: 100px;" (click)="addProduct()">
      Add Product
    </button>
    <table>
      <thead>
        <tr>
          <th>ProductName</th>
          <th>TotalProduct</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let products of products">
          <tr>
            <td>{{ products.ProductName }}</td>
            <td>{{ products.TotalProduct }}</td>
          </tr>
        </ng-container>
      </tbody>
    </table>
  `,
  styles: [],
})
export class ManageProductComponent implements OnInit {
  products: Productmodel[];

  constructor(private productServ: ProductService) {}
  ngOnInit() {
    this.productServ.GetAllProducts().subscribe((productData) => {
      this.products = productData;
    });
  }
  addProduct() {}
}
