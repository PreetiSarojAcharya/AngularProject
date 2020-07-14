import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-forms',
  templateUrl: './temp-forms.component.html',
  styles: [],
})
export class TempFormsComponent {
  log(tempVar) {
    console.clear();
    console.log(tempVar);
    console.log(tempVar.value);
  }

  showForm(fTempVar) {
    console.clear();

    console.log(fTempVar);
  }
}
