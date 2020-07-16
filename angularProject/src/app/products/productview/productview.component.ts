import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styles: [],
})
export class ProductviewComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((param) =>
      console.log(' param : ', param.get('prodObj'))
    );
  }
}
