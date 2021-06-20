import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tickets-item',
  templateUrl: './tickets-item.component.html',
  styleUrls: ['./tickets-item.component.css'],
})
export class TicketsItemComponent implements OnInit {
  @Input() ticket: any;

  constructor() {}

  ngOnInit(): void {}
}
