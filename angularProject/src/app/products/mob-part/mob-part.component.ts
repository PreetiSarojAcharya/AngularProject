import { Component, OnInit } from '@angular/core';
import { MOBPART } from './mock-data';
import { MobPart } from 'Model/mob-part';

@Component({
  selector: 'app-mob-part',
  templateUrl: './mob-part.component.html',
  styles: [],
})
export class MobPartComponent implements OnInit {
  constructor() {}
  mobParts: MobPart[] = MOBPART;
  ngOnInit(): void {}

  countProduct() {
    let totalCount = 0;

    for (let gg of this.mobParts) {
      totalCount += gg.inStock;
    }
    return totalCount;
  }
}
