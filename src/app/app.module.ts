import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FooterModule} from "./components/footer/footer.module";
import {ProductModule} from "./components/product/product.module";
import {HeaderModule} from "./components/header/header.module";
import {ContactModule} from "./page/contact/contact.module";
import {HomeModule} from "./page/home/home.module";
import {ProductDetailModule} from "./components/product-detail/product-detail.module";
import {ProductSingleModule} from "./page/product-single/product-single.module";
import {CartModule} from "./page/cart/cart.module";
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FooterModule,
    ProductModule,
    HeaderModule,
    ContactModule,
    HomeModule,
    ProductDetailModule,
    ProductSingleModule,
    CartModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
