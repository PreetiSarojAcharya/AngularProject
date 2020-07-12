import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Productmodel } from './../../../Model/productmodel';

@Component({
  selector: 'app-manage-product',
  template: `
    <div class="col s12 m7">
      <h2 class="header">Manage Product</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="../../../../assets/img/2.jpeg" />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>
              This is a Manage-Product page.
            </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ManageProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
