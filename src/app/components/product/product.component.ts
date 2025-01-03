import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productList: Product[] = [];
  @Input() selectedValue: string = '';


}
