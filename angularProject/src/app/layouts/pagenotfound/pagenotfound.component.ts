import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
    <p>
      <img src="../../../assets/img/404.jpg" />
    </p>
  `,
  styles: [],
})
export class PagenotfoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
