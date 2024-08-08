import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {SliderComponent} from "./slider/slider.component";
import {MatCardModule} from "@angular/material/card";
import {HeaderComponent} from "./header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {FooterComponent} from "./footer/footer.component";
import {CardComponent} from "./card/card.component";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "../app-routing.module";
import {DetailCardComponent} from "./detail-card/detail-card.component";


@NgModule({
  declarations: [
    TestComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DetailCardComponent
  ],
  exports: [
    TestComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DetailCardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ComponentsModule { }
