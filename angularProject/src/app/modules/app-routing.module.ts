import { SamsungComponent } from './../products/mob-part/samsung/samsung.component';
import { MotoComponent } from './../products/mob-part/moto/moto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { SqrtPipe } from '../pipes/sqrt.pipe';
import { FooterComponent } from '../layouts/footer/footer.component';
import { BannerThreeComponent } from '../layouts/banner-three/banner-three.component';
import { ContainerComponent } from '../layouts/container/container.component';
import { ContactUsComponent } from '../layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from '../layouts/banner-two/banner-two.component';
import { ProductsComponent } from '../layouts/products/products.component';
import { BannerOneComponent } from '../layouts/banner-one/banner-one.component';
import { NavComponent } from '../layouts/nav/nav.component';
import { SimpleStyleDirectiveDirective } from '../directives/simple-style-directive.directive';
import { MobPartComponent } from '../products/mob-part/mob-part.component';
import { LaptopComponent } from '../products/laptop/laptop.component';
import { BooksComponent } from '../products/books/books.component';
import { PensComponent } from '../products/pens/pens.component';
import { PagenotfoundComponent } from '../layouts/pagenotfound/pagenotfound.component';
import { HomeComponent } from '../layouts/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'mobile',
    component: MobPartComponent,
    children: [
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
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)], // module : group of logics
  exports: [RouterModule],
})
export class AppRoutingModule {}
