import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../service/checkout-service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkout: any = [];
  isShowingCodeInput: boolean = false;
  constructor(private checkoutService: CheckoutService) {}

  getSubtotal(): number {
    return this.checkout.reduce(
      (a: any, b: any) => a + b.ticketPrice * b.ticketToOrder,
      0
    );
  }

  ngOnInit(): void {
    this.checkoutService.checkoutOrders.subscribe((orderData: any) => {
      this.checkout = orderData;
    });
  }

  showCodeInput() {
    this.isShowingCodeInput = !this.isShowingCodeInput;
    console.log(this.checkout);
  }
}
