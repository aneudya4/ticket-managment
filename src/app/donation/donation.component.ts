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

  onDonationSelected(donation: number) {
    const inputTag = <HTMLInputElement>(
      this.el.nativeElement.querySelector('input')
    );
    this.donationSelected = donation;
    const totalDonation = this.donationSelected + Number(inputTag.value);
    this.donationAdded.emit({
      ticketName: 'Donation',
      ticketPrice: totalDonation,
      ticketToOrder: 1,
    });
  }

  onInputChange(e: Event) {
    const totalDonation =
      Number((<HTMLInputElement>e.target).value) + this.donationSelected;
    this.donationAdded.emit({
      ticketName: 'Donation',
      ticketPrice: totalDonation,
      ticketToOrder: (<HTMLInputElement>e.target).value === '' ? 0 : 1,
    });
    console.log(this.donations);
  }
}
