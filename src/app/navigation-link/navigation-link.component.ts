import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.css'],
})
export class NavigationLinkComponent implements OnInit {
  @Input() linkName: string;
  constructor() {}

  ngOnInit(): void {}
}
