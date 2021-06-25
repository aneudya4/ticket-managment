import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TicketsToOrder } from '../interface/TicketsToOrder';
import { Ticket } from '../interface/Ticket';

@Component({
  selector: 'app-tickets-item',
  templateUrl: './tickets-item.component.html',
  styleUrls: ['./tickets-item.component.css'],
})
export class TicketsItemComponent implements OnInit {
  @Input() ticket: Ticket;

  @Output() ticketAdded = new EventEmitter<TicketsToOrder>();
  ticketsToOrder: number = 0;
  ticketWaitlisted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onInputChange(
    e: Event,
    ticketName: string,
    ticketPrice: number,
    isEvent: boolean
  ): void {
    this.ticketsToOrder = Number((<HTMLInputElement>e.target).value);
    if (this.ticketsToOrder === 0) {
      this.ticketWaitlisted = false;

      this.ticketAdded.emit({
        ticketName: ticketName,
        ticketPrice: ticketPrice,
        ticketToOrder: 0,
        isWaitListed: false,
        isEvent: isEvent,
      });
      return;
    }
    if (this.ticketsToOrder > this.ticket.ticketsAvailable) {
      this.ticketAdded.emit({
        ticketName: ticketName,
        ticketPrice: ticketPrice,
        ticketToOrder: this.ticket.ticketsAvailable,
        isWaitListed: false,
        isEvent: isEvent,
      });
      return;
    }

    this.ticketAdded.emit({
      ticketName: ticketName,
      ticketPrice: ticketPrice,
      ticketToOrder: this.ticketsToOrder,
      isWaitListed: false,
      isEvent: isEvent,
    });
  }

  addToWaitList() {
    this.ticketWaitlisted = true;
    this.ticketAdded.emit({
      ticketName: this.ticket.ticketName,
      ticketPrice: this.ticket.ticketPrice,
      ticketToOrder: this.ticketsToOrder - this.ticket.ticketsAvailable,
      isWaitListed: true,
      isEvent: true,
    });
  }
  removeFromWaitList() {
    this.ticketWaitlisted = false;

    this.ticketAdded.emit({
      ticketName: this.ticket.ticketName,
      ticketPrice: this.ticket.ticketPrice,
      ticketToOrder: 0,
      isWaitListed: true,
      isEvent: true,
    });
  }
}
