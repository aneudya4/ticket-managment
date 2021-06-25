import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { CheckoutService } from '../service/checkout-service';
import { RouteService } from '../service/route-service';

import { Ticket } from '../interface/Ticket';
import { TicketsToOrder } from '../interface/TicketsToOrder';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css'],
})
export class TicketsListComponent implements OnInit, OnDestroy {
  tickets: Ticket[] = [
    {
      ticketName: 'Free Ticket',
      ticketDesc:
        'Free ticket for anyone to make a valuable contribution towards our future online events programme. Thank you.',
      ticketPrice: 0,
      ticketQuantity: 5,
      ticketsAvailable: 2,
      isEvent: true,
    },
    {
      ticketName: 'Alumni VIP Ticket',
      ticketDesc:
        'This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime',
      ticketPrice: 95.99,
      ticketQuantity: 5,
      ticketsAvailable: 4,
      isEvent: true,
    },
    {
      ticketName: 'Alumni VIP Ticket',
      ticketDesc:
        'This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime',
      ticketPrice: 3500,
      ticketQuantity: 5,
      ticketsAvailable: 3,
      isEvent: true,
    },
  ];

  donations: number[] = [50, 100, 200, 500];

  @Output() selectedTickets: TicketsToOrder[] = [];

  constructor(
    private checkoutService: CheckoutService,
    private routeService: RouteService
  ) {}
  ngOnDestroy(): void {
    this.routeService.checkoutData = this.selectedTickets;
  }

  ngOnInit(): void {}

  onTicketAdded(orderInfo: {
    ticketName: string;
    ticketPrice: number;
    ticketToOrder: number;
    isWaitListed: boolean;
    isEvent: boolean;
  }): void {
    // takes out  the tickets when dont want the waitlisted anymore or when user selects 0

    if (orderInfo.ticketToOrder === 0 && orderInfo.isWaitListed) {
      this.selectedTickets = this.selectedTickets.filter(
        (t: any) => !t.isWaitListed
      );
      this.checkoutService.sendCheckoutData(this.selectedTickets);
      return;
    }

    if (orderInfo.ticketToOrder === 0) {
      this.selectedTickets = this.filterUnselectedTicket(orderInfo.ticketName);
      this.checkoutService.sendCheckoutData(this.selectedTickets);
      return;
    }

    const newTicket: TicketsToOrder = {
      ticketName: orderInfo.ticketName,
      ticketPrice: orderInfo.ticketPrice,
      ticketToOrder: orderInfo.ticketToOrder,
      isWaitListed: orderInfo.isWaitListed,
      isEvent: orderInfo.isEvent,
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

  filterUnselectedTicket(ticketName: string): TicketsToOrder[] {
    return this.selectedTickets.filter((t: any) => t.ticketName !== ticketName);
  }
}
