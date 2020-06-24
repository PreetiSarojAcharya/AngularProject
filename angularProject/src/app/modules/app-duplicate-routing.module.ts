import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MobPartComponent } from '../products/mob-part/mob-part.component';
import { LaptopComponent } from '../products/laptop/laptop.component';
import { BooksComponent } from '../products/books/books.component';
import { PensComponent } from '../products/pens/pens.component';
import { PagenotfoundComponent } from '../layouts/pagenotfound/pagenotfound.component';
import { HomeComponent } from '../layouts/home/home.component';

const appRoutes: Routes = [
  {
    path: 'mobile',
    component: MobPartComponent,
  },

  { path: 'laptop', component: LaptopComponent },
  { path: 'book', component: BooksComponent },
  { path: 'pen', component: PensComponent },
  { path: '**', component: PagenotfoundComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppDuplicateRoutingModule {}
