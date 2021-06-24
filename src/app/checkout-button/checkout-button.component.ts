import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-button',
  templateUrl: './checkout-button.component.html',
  styleUrls: ['./checkout-button.component.css'],
})
export class CheckoutButtonComponent implements OnInit {
  @Input() linkName: string;
  @Input() linkUrl: string;
  @Input() disabled: any;
  ngOnInit(): void {}
}
