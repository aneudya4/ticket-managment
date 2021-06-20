import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsItemComponent } from './tickets-item/tickets-item.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DonationComponent } from './donation/donation.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsListComponent,
    TicketsItemComponent,
    TicketsComponent,
    DonationComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
