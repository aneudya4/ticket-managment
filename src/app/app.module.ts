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
import { TicketsFormComponent } from './tickets-form/tickets-form.component';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutButtonComponent } from './checkout-button/checkout-button.component';
import { CheckoutService } from './service/checkout-service';

import { FormItemComponent } from './form-item/form-item.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TicketsListComponent,
  },
  {
    path: 'checkout',
    component: TicketsFormComponent,
    canActivate: [CheckoutService],
  },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  declarations: [
    AppComponent,
    TicketsListComponent,
    TicketsItemComponent,
    DonationComponent,
    CheckoutComponent,
    DonationItemComponent,
    TicketsFormComponent,
    CheckoutButtonComponent,
    FormItemComponent,
    NavigationLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
