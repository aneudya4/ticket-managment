import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  @Input() donations: any;
  @Output() donationAdded = new EventEmitter();
  donationSelected: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  onDonationSelected(donation: any) {
    const myTag = this.el.nativeElement.querySelector('input');
    this.donationSelected = donation;
    const totalDonation = this.donationSelected + Number(myTag.value);
    this.donationAdded.emit({
      ticketName: 'Donation',
      ticketPrice: totalDonation,
      ticketsToOrder: 1,
    });
  }

  onInputChange(e: any) {
    const totalDonation = Number(e.target.value) + this.donationSelected;
    this.donationAdded.emit({
      ticketName: 'Donation',
      ticketPrice: totalDonation,
      ticketsToOrder: e.target.value === '' ? 0 : 1,
    });
  }
}
