import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {
  name!: string;
  contact!: string;
  vehicleModel!: string;
  address!: string;
  serviceDate!: Date;
  bookingDetails: any;

  constructor(private router: Router) { }

  // ngOnInit(): void {
  //   // You can replace these with dynamic data or pass them as input from the previous component
  //   this.name = 'John Doe';
  //   this.contact = '9876543210';
  //   this.vehicleModel = 'Toyota Corolla';
  //   this.address = '1234 Main St, City, Country';
  //   this.serviceDate = new Date(); // For now, using the current date
  // }
  ngOnInit(): void {
    // Retrieve the passed booking details from router state
    const nav = window.history.state;
    // const navigation:any = this.router.getCurrentNavigation();
    this.bookingDetails = nav?.bookingData;
    console.log('nav', nav);
    console.log('this.bookingDetails', this.bookingDetails);


    if (!this.bookingDetails) {
      // Handle case where no data is passed, maybe redirect to home or show an error
      this.router.navigate(['/']);
    }
  }

}
