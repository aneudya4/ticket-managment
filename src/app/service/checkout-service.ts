import { Injectable } from '@angular/core';
import { TicketsToOrder } from '../interface/TicketsToOrder';
import { Subject } from 'rxjs';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService implements CanActivate {
  checkoutOrders = new Subject();
  donationsAdded = new Subject();
  checkoutData = <TicketsToOrder[]>[];
  constructor(private router: Router) {}

  sendCheckoutData(checkoutData: TicketsToOrder[]) {
    this.checkoutOrders.next(checkoutData);
    this.checkoutData = checkoutData;
  }

  sendDonationsToCheckout(donations: number) {
    this.donationsAdded.next(donations);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.checkoutData.length === 0) this.router.navigateByUrl('/');
    return this.checkoutData.length > 0;
  }
}
