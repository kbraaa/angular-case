import {Component} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  cartItemsCount: Observable<number> = this.cartService.cart$.pipe(
    map((cart) => cart.length ?? 0)
  );

  constructor(private cartService: CartService) {}

}
