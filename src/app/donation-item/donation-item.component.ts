import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donation-item',
  templateUrl: './donation-item.component.html',
  styleUrls: ['./donation-item.component.css'],
})
export class DonationItemComponent implements OnInit {
  @Input() donation: any;
  donationSelected: string = '';
  constructor() {}

  ngOnInit(): void {}
}
