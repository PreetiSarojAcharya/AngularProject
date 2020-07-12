import { LapiOffersComponent } from './../products/laptop/lapi-offers/lapi-offers.component';
import { LapiDetailsComponent } from './../products/laptop/lapi-details/lapi-details.component';
import { LazyModule } from './lazy/lazy.module';
import { LogindasboardComponent } from './../admin/logindasboard/logindasboard.component';
import { SetPriceComponent } from './../admin/dashboard/set-price/set-price.component';
import { ManageProductComponent } from './../admin/dashboard/manage-product/manage-product.component';
import { DashboardNavComponent } from './../admin/dashboard/dashboard-nav/dashboard-nav.component';
import { MobPartComponent } from './../products/mob-part/mob-part.component';
import { MobilenavComponent } from './../products/mob-part/mobilenav/mobilenav.component';
import { SamsungComponent } from './../products/mob-part/samsung/samsung.component';
import { MotoComponent } from './../products/mob-part/moto/moto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from '../products/laptop/laptop.component';
import { BooksComponent } from '../products/books/books.component';
import { PensComponent } from '../products/pens/pens.component';
import { PagenotfoundComponent } from '../layouts/pagenotfound/pagenotfound.component';
import { HomeComponent } from '../layouts/home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './../admin/login/login.component';
import { DashboardComponent } from './../admin/dashboard/dashboard.component';
import { AuthGuard } from './../guards/auth.guard';
import { AuthdashGuard } from './../guards/authdash.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardNavComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'product',
        //canActivate: [AuthdashGuard],
        component: ManageProductComponent,
      },

      {
        path: 'price',
        //canActivate: [AuthdashGuard],
        component: SetPriceComponent,
      },

      {
        path: 'logindashboard',
        component: LogindasboardComponent,
      },
    ],
  },

  {
    path: 'mobile',
    component: MobilenavComponent,
    children: [
      { path: '', component: MobPartComponent },
      {
        path: 'moto',
        component: MotoComponent,
      },

      {
        path: 'samsung',
        component: SamsungComponent,
      },
    ],
  },
  { path: 'laptop', component: LaptopComponent },
  { path: 'lapiDetails', component: LapiDetailsComponent, outlet: 'outlet1' },
  { path: 'lapiOffers', component: LapiOffersComponent, outlet: 'outlet2' },
  { path: 'book', component: BooksComponent },
  { path: 'pen', component: PensComponent },
  {
    path: 'lazy',
    loadChildren: '../modules/lazy/lazy.module#LazyModule',
  },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)], // module : group of logics
  exports: [RouterModule],
})
export class AppRoutingModule {}
