import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-price',
  template: `
    <div class="col s12 m7">
      <h2 class="header">Set Price</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="../../../../assets/img/5.jpeg" />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>
              This is a Set-Price page.
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
export class SetPriceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
