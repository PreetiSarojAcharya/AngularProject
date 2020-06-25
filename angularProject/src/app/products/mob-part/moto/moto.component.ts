import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moto',
  template: `
    <h1>
      <img
        src="../../../../assets/img/_PP08970.jpg"
        width="400"
        class="img-rounded"
      />
      <img
        src=".../../../../assets/img/_PP04894.jpg"
        width="400"
        class="img-circle"
      />
    </h1>
  `,
  styles: [],
})
export class MotoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
