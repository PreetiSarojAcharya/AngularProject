import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  checkUsernameAndPassword(uname: string, pswd: string) {
    if (uname == 'admin' && pswd == 'admin') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }
}
