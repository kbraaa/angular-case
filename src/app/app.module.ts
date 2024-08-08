import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SepetComponent } from './page/sepet/sepet.component';
import {ProductDetailComponent} from "./page/product-detail/product-detail.component";
import {ComponentsModule} from "./components/components.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SepetComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    ComponentsModule

  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
