import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung',
  template: `
    <h1>
      <h1>
        <img
          src=".../../../../assets/img/_PP08899.jpg"
          width="400"
          class="img-circle"
        />
        <img
          src="../../../../assets/img/_PP04949.jpg"
          width="400"
          class="img-rounded"
        />
      </h1>
    </h1>
  `,
  styles: [],
})
export class SamsungComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
