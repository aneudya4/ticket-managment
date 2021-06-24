import { Component, OnInit } from '@angular/core';
import { RouteService } from '../service/route-service';

@Component({
  selector: 'app-tickets-form',
  templateUrl: './tickets-form.component.html',
  styleUrls: ['./tickets-form.component.css'],
})
export class TicketsFormComponent implements OnInit {
  ticketsToOrder: any = [];
  constructor(private RouteService: RouteService) {}

  ngOnInit(): void {
    let tickets = this.RouteService.checkoutData.filter(
      (t: any) => t.isEvent && !t.isWaitListed
    );
    this.ticketsToOrder = tickets;
  }
}
