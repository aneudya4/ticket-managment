import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-tickets-item',
  templateUrl: './tickets-item.component.html',
  styleUrls: ['./tickets-item.component.css'],
})
export class TicketsItemComponent implements OnInit {
  @Input() ticket: any;
  @Output() ticketAdded = new EventEmitter<{
    ticketName: string;
    ticketPrice: number;
    ticketsToOrder: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onInputChange(e: any, ticketName: string, ticketPrice: number) {
    const ticketToOrder = e.target.value;
    this.ticketAdded.emit({
      ticketName: ticketName,
      ticketPrice: ticketPrice,
      ticketsToOrder: Number(ticketToOrder),
    });
  }
}
