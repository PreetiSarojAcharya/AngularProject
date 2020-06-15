import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { FooterComponent } from './layouts/footer/footer.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContainerComponent } from './layouts/container/container.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { NavComponent } from './layouts/nav/nav.component';
import { SimpleStyleDirectiveDirective } from './directives/simple-style-directive.directive';
import { MobPartComponent } from './products/mob-part/mob-part.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { BooksComponent } from './products/books/books.component';
import { PensComponent } from './products/pens/pens.component';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    FooterComponent,
    BannerThreeComponent,
    ContainerComponent,
    ContactUsComponent,
    BannerTwoComponent,
    ProductsComponent,
    BannerOneComponent,
    NavComponent,
    SimpleStyleDirectiveDirective,
    MobPartComponent,
    LaptopComponent,
    BooksComponent,
    PensComponent,
  ],
  imports: [BrowserModule], // module : group of logics
  bootstrap: [AppComponent], // to run : root compo
})
export class AppModule {}

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
