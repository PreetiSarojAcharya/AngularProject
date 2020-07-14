import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../../Model/productmodel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  products: Productmodel[];

  constructor(private productServ: ProductService) {}
  ngOnInit() {
    this.productServ.GetAllProducts().subscribe((productData) => {
      this.products = productData;
    });
  }
  addProduct() {}
}
