import { Component, OnInit } from '@angular/core';
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
      ticketPrice: 0,
      ticketQuantity: 5,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
