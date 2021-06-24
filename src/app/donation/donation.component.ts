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
  @Input() donations: number[];
  @Output() donationAdded = new EventEmitter();
  donationSelected: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  onDonationSelected(donation: number): void {
    const inputTag = <HTMLInputElement>(
      this.el.nativeElement.querySelector('input')
    );

    if (donation === this.donationSelected && Number(inputTag.value) === 0) {
      this.donationSelected = 0;

      this.donationAdded.emit({
        ticketName: 'Donation',
        ticketPrice: 0,
        ticketToOrder: 0,
        isEvent: false,
      });
      return;
    }
    if (donation === this.donationSelected && Number(inputTag.value) !== 0) {
      this.donationSelected = 0;

      this.donationAdded.emit({
        ticketName: 'Donation',
        ticketPrice: this.donationSelected + Number(inputTag.value),
        ticketToOrder: 1,
        isEvent: false,
      });
      return;
    }

    this.donationSelected = donation;

    this.donationAdded.emit({
      ticketName: 'Donation',
      ticketPrice: this.donationSelected + Number(inputTag.value),
      ticketToOrder: 1,
      isEvent: false,
    });
  }

  onInputChange(e: Event): void {
    const totalDonation =
      Number((<HTMLInputElement>e.target).value) + this.donationSelected;
    this.donationAdded.emit({
      ticketName: 'Donation',
      ticketPrice: totalDonation,
      isEvent: false,
      ticketToOrder:
        (<HTMLInputElement>e.target).value === '' && this.donationSelected === 0
          ? 0
          : 1,
    });
  }
}
