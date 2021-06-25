import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from '../service/checkout-service';
import { TicketsToOrder } from '../interface/TicketsToOrder';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkout: TicketsToOrder[] = [];
  isShowingCodeInput: boolean = false;

  router: Router;

  constructor(
    private checkoutService: CheckoutService,
    private _router: Router
  ) {
    this.router = _router;
  }

  getSubtotal(): number {
    return this.checkout.reduce((a: number, b: TicketsToOrder) => {
      if (!b.isWaitListed) {
        return a + b.ticketPrice * b.ticketToOrder;
      }
      return 0;
    }, 0);
  }

  ngOnInit(): void {
    this.checkoutService.checkoutOrders.subscribe((orderData: any) => {
      this.checkout = orderData;
    });
  }

  showCodeInput(): void {
    this.isShowingCodeInput = true;
  }

  getTaxes() {
    // calculate 2 % of subtotal
    const subtotal = this.getSubtotal();
    const taxes = (2 / 100) * subtotal;
    return taxes.toFixed(2);
  }

  getTotal() {
    return this.getSubtotal() + parseFloat(this.getTaxes());
  }
}
