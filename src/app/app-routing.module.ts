import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { ListComponent } from './components/list/list.component';
import { LocationSettingsComponent } from './components/location-settings/location-settings.component';
import { ExpandedListItemComponent } from './components/expanded-list-item/expanded-list-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BookedComponent } from './components/booked/booked.component';

const routes: Routes = [{ path: 'slash', component: SplashComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
