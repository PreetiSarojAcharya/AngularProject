import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styles: [],
})
export class MotoComponent {
  mobParts: any[];
  constructor(angularFireDatabase: AngularFireDatabase) {
    angularFireDatabase
      .list('/apidata')
      .valueChanges()
      .subscribe((mobParts) => {
        this.mobParts = mobParts;
        console.log(this.mobParts);
      });
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
