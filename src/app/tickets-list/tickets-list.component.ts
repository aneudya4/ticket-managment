import { Component, OnInit, Output } from '@angular/core';
import { CheckoutService } from '../service/checkout-service';
import { Ticket } from '../interface/Ticket';

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
    },
    {
      ticketName: 'Alumni VIP Ticket',
      ticketDesc:
        'This livestream will broadcast via a private Youtube link that will be sent to ticket purchasers an hour prior to showtime',
      ticketPrice: 3500,
      ticketQuantity: 5,
    },
  ];

  donations: Number[] = [50, 100, 200, 500];

  @Output() selectedTickets: any = [];

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {}

  onTicketAdded(orderInfo: {
    ticketName: string;
    ticketPrice: number;
    ticketsToOrder: number;
  }) {
    if (orderInfo.ticketsToOrder === 0) {
      this.checkoutService.sendCheckoutData([]);
    } else {
      const ticketIndex: any = this.selectedTickets.findIndex(
        (e: any) => e.ticketName === orderInfo.ticketName
      );
      const newTicket: any = {
        ticketName: orderInfo.ticketName,
        ticketPrice: orderInfo.ticketPrice,
        ticketToOrder: orderInfo.ticketsToOrder,
      };
      if (ticketIndex < 0) {
        this.selectedTickets.push(newTicket);
      } else {
        this.selectedTickets[ticketIndex] = newTicket;
      }

      this.checkoutService.sendCheckoutData(this.selectedTickets);
    }
  }
}
