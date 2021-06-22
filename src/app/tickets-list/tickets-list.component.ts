import { Component, OnInit, Output } from '@angular/core';
import { CheckoutService } from '../service/checkout-service';
import { Ticket } from '../interface/Ticket';
import { TicketsToOrder } from '../interface/TicketsToOrder';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css'],
})
export class TicketsListComponent implements OnInit {
  tickets: Ticket[] = [
    {
      ticketName: 'Free Ticket',
      ticketDesc:
        'Free ticket for anyone to make a valuable contribution towards our future online events programme.thank you',
      ticketPrice: 0,
      ticketQuantity: 5,
      ticketsAvailable: 2,
    },
    {
      ticketName: 'Alumni VIP Ticket',
      ticketDesc:
        'This livestream will broadcast via a private Youtube link that will be sent to ticket purchasers an hour prior to showtime',
      ticketPrice: 3500,
      ticketQuantity: 5,
      ticketsAvailable: 3,
    },
  ];

  donations: number[] = [50, 100, 200, 500];

  @Output() selectedTickets: TicketsToOrder[] = [];

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {}

  onTicketAdded(orderInfo: {
    ticketName: string;
    ticketPrice: number;
    ticketToOrder: number;
    isWaitListed: boolean;
  }): void {
    if (orderInfo.ticketToOrder === 0) {
      this.selectedTickets = this.filterUnselectedTicket(
        orderInfo.ticketName,
        orderInfo.isWaitListed
      );
      console.log(this.selectedTickets, 'ss');
      this.checkoutService.sendCheckoutData(this.selectedTickets);
      return;
    }

    const newTicket: TicketsToOrder = {
      ticketName: orderInfo.ticketName,
      ticketPrice: orderInfo.ticketPrice,
      ticketToOrder: orderInfo.ticketToOrder,
      isWaitListed: orderInfo.isWaitListed,
    };

    const existingTicketIndex: number = this.selectedTickets.findIndex(
      (e: TicketsToOrder) =>
        e.ticketName === orderInfo.ticketName &&
        e.isWaitListed === orderInfo.isWaitListed
    );

    if (existingTicketIndex < 0) {
      this.selectedTickets.push(newTicket);
    } else {
      this.selectedTickets[existingTicketIndex] = newTicket;
    }

    this.checkoutService.sendCheckoutData(this.selectedTickets);
  }

  filterUnselectedTicket(
    ticketName: string,
    isWaitListed: boolean
  ): TicketsToOrder[] {
    return this.selectedTickets.filter(
      (t: any) => t.ticketName !== ticketName || t.isWaitListed !== isWaitListed
    );
  }
}
