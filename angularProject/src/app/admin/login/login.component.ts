import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  msg;
  ngOnInit() {}

  check(uname: string, pswd: string) {
    var output = this.authService.checkUsernameAndPassword(uname, pswd);
    if (output == true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.msg = 'Invalid username or password';
    }
  }
}
