import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { SliderComponent } from './components/slider/slider.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { SepetComponent } from './page/sepet/sepet.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SliderComponent,
    CardComponent,
    ProductDetailComponent,
    SepetComponent,
    DetailCardComponent
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
