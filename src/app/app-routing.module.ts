import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from 'src/components/booking-details/booking-details.component';
import { HomeComponent } from 'src/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Home page route
  { path: 'booking', component: BookingDetailsComponent },  // Booking page route
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Wildcard route to redirect to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
