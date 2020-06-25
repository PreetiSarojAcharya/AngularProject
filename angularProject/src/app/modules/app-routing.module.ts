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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
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
  { path: 'book', component: BooksComponent },
  { path: 'pen', component: PensComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)], // module : group of logics
  exports: [RouterModule],
})
export class AppRoutingModule {}
