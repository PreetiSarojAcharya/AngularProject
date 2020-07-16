import { ProductService } from './services/product.service';
import { ComService } from './services/com.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { PagenotfoundComponent } from './layouts/pagenotfound/pagenotfound.component';
import { HomeComponent } from './layouts/home/home.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { MotoComponent } from './products/mob-part/moto/moto.component';
import { SamsungComponent } from './products/mob-part/samsung/samsung.component';
import { AppDuplicateRoutingModule } from './modules/app-duplicate-routing.module';
import { MobilenavComponent } from './products/mob-part/mobilenav/mobilenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';

import { AllMaterialModule } from './modules/all-material.module';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ManageProductComponent } from './admin/dashboard/manage-product/manage-product.component';
import { SetPriceComponent } from './admin/dashboard/set-price/set-price.component';
import { DashboardNavComponent } from './admin/dashboard/dashboard-nav/dashboard-nav.component';
import { LogindasboardComponent } from './admin/logindasboard/logindasboard.component';
import { LazyModule } from './modules/lazy/lazy.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './firebase/firebase.config';
import { HostDirective } from './directives/host.directive';
import { LapiDetailsComponent } from './products/laptop/lapi-details/lapi-details.component';
import { LapiOffersComponent } from './products/laptop/lapi-offers/lapi-offers.component';
import { TempFormsComponent } from './components/forms/temp-forms/temp-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { ProductviewComponent } from './products/productview/productview.component';
import { ChildComponent } from './components/child/child.component';
import { ParentsComponent } from './components/parents/parents.component';

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
    PagenotfoundComponent,
    HomeComponent,
    MotoComponent,
    SamsungComponent,
    MobilenavComponent,
    LoginComponent,
    DashboardComponent,
    ManageProductComponent,
    SetPriceComponent,
    DashboardNavComponent,
    LogindasboardComponent,
    HostDirective,
    LapiDetailsComponent,
    LapiOffersComponent,
    TempFormsComponent,
    ReactiveFormsComponent,
    ProductviewComponent,
    ChildComponent,
    ParentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppDuplicateRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    HttpModule,
    LazyModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ], // module : group of logics
  bootstrap: [AppComponent], // to run : root compo
  providers: [AuthGuard, ComService, ProductService],
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
