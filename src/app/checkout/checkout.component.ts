import { Component, OnInit } from '@angular/core';
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
  constructor(private checkoutService: CheckoutService) {}

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
    console.log(this.checkout);
  }
}
