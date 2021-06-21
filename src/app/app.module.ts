import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsItemComponent } from './tickets-item/tickets-item.component';
import { DonationComponent } from './donation/donation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DonationItemComponent } from './donation-item/donation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsListComponent,
    TicketsItemComponent,
    DonationComponent,
    CheckoutComponent,
    DonationItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
