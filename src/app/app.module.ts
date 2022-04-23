import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { ListComponent } from './components/list/list.component';
import { LocationSettingsComponent } from './components/location-settings/location-settings.component';
import { ExpandedListItemComponent } from './components/expanded-list-item/expanded-list-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BookedComponent } from './components/booked/booked.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    ListComponent,
    LocationSettingsComponent,
    ExpandedListItemComponent,
    CheckoutComponent,
    BookedComponent,
    HeaderComponent,
    CardComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatSliderModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
