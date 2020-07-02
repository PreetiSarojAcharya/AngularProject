import { SetPriceComponent } from './../dashboard/set-price/set-price.component';
import { Router } from '@angular/router';
import { AuthdashboardService } from './../../services/authdashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logindasboard',
  templateUrl: './logindasboard.component.html',
  styles: [],
  providers: [AuthdashboardService],
})
export class LogindasboardComponent implements OnInit {
  constructor(
    private authdashboardService: AuthdashboardService,
    private router: Router
  ) {}
  msgdash;
  ngOnInit() {}
  checkdash(unamedash: string, pswddash: string) {
    var output = this.authdashboardService.checkUsernameAndPassworddash(
      unamedash,
      pswddash
    );
    if (output == true) {
      this.router.navigate(['/dashboard/price']);
    } else {
      this.msgdash = 'Invalid username or password for Dashboard!';
    }
  }
}
