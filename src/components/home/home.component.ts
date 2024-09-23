import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  customerName:any
  vehicleModel:any
  contact:any
  address:any
  bookingDate:any
  constructor(private http:HttpClient){

  }

  bookService(){
    const bookingData:any={
      customerName:this.customerName,
        vehicleModel:this.vehicleModel,
        address:this.address,
        city:"ayodhya",
        contact:this.contact,
        serviceEnquiryDate:new Date(),
        serviceScheduledDate:this.bookingDate,
        serviceCompletedDate:'',
        status:"Enquiry",
        totalBillAmount:0,
        totalPaidAmount:0,
        isBillPaid:"",
        isNewBooking:true,
        comment:'',
        assignedMechanic:'',
        updatedBy:"Customer",
  }
    this.http.post("https://d2d-booking-be-fzd-api-4.onrender.com/api/bookings", bookingData).subscribe(res => {
      console.log("Booked Successfully.");

    })
  }

}
