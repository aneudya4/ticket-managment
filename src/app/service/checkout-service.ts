import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkoutOrders = new Subject();
  donationsAdded = new Subject();
  constructor() {}

  sendCheckoutData(checkoutData: any) {
    this.checkoutOrders.next(checkoutData);
  }

  sendDonationsToCheckout(donations: any) {
    console.log(donations);
    this.donationsAdded.next(donations);
  }
}
