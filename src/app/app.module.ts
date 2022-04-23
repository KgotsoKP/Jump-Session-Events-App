import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { ListComponent } from './components/list/list.component';
import { LocationSettingsComponent } from './components/location-settings/location-settings.component';
import { ExpandedListItemComponent } from './components/expanded-list-item/expanded-list-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BookedComponent } from './components/booked/booked.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    ListComponent,
    LocationSettingsComponent,
    ExpandedListItemComponent,
    CheckoutComponent,
    BookedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
