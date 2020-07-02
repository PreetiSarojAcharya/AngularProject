import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styles: [],
})
export class DashboardNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // logout() {
  //   localStorage.removeItem('username');
  // }

  // isLogin() {
  //   if (localStorage.getItem('username') != null) return true;
  //   return false;
  // }

  logoutdash() {
    localStorage.removeItem('usernamedash');
  }

  isLogindash() {
    if (localStorage.getItem('usernamedash') != null) return true;
    return false;
  }
}
