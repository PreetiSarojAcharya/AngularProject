import { Component, OnInit } from '@angular/core';
import { MobPart } from 'Model/mob-part';
import { ComService } from './../../services/com.service';

@Component({
  selector: 'app-mob-part',
  templateUrl: './mob-part.component.html',
  styles: [],
})
export class MobPartComponent implements OnInit {
  mobParts: MobPart[];

  constructor(private comService: ComService) {
    // this.mobParts = comService.getMobParts();

    console.log('2 Constructor Block...!');
  } // class: DI -> obj init

  ngOnInit(): void {
    // component
    // this.mobParts = this.comService.getMobParts();
    this.comService
      .getMobParts()
      .subscribe((response) => (this.mobParts = response));
    console.log('1 ngOnInit Block...!');
  }

  // 8 lifecylehooks

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mobParts = [];
    console.log('3 ngOnDestroy Block...!');
  }

  ngAfterViewInit() {
    console.log('4 ngAfterViewInit Block...!');
  }

  ngAfterContentInit() {
    console.log('5 ngAfterContentInit Block...!');
  }

  countProduct() {
    let totalCount = 0;
    if (Array.isArray(this.mobParts)) {
      for (let gg of this.mobParts) {
        totalCount += gg.inStock;
      }
    }
    return totalCount;
  }

  upQuantity(mobPart) {
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }

  catchVal(eventData, eventObj) {
    console.clear();
    console.log('This is the value', eventData);
    console.log(eventObj);
  }
}
