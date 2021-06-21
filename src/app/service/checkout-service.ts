import { Injectable } from '@angular/core';
import { TicketsToOrder } from '../interface/TicketsToOrder';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkoutOrders = new Subject();
  donationsAdded = new Subject();
  constructor() {}

  sendCheckoutData(checkoutData: TicketsToOrder[]) {
    this.checkoutOrders.next(checkoutData);
  }

  sendDonationsToCheckout(donations: number) {
    this.donationsAdded.next(donations);
  }
}
