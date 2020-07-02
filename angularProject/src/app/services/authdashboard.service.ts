import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthdashboardService {
  constructor() {}

  checkUsernameAndPassworddash(unamedash: string, pswddash: string) {
    if (unamedash == 'super' && pswddash == 'super') {
      localStorage.setItem('usernamedash', 'super');
      return true;
    } else {
      return false;
    }
  }
}
