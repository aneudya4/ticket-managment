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

  constructor() {}

  ngOnInit(): void {}

  onInputChange(e: Event, ticketName: string, ticketPrice: number): void {
    const ticketToOrder = (<HTMLInputElement>e.target).value;
    this.ticketAdded.emit({
      ticketName: ticketName,
      ticketPrice: ticketPrice,
      ticketToOrder: Number(ticketToOrder),
    });
  }
}
