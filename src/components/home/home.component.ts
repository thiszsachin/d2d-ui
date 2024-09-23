import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  customerName:any=''
  vehicleModel:any=''
  contact:any=''
  address:any=''
  bookingDate:any=''
  isServiceBooked:boolean=false;
  showError:boolean=false
  constructor(private http:HttpClient){

  }

  bookService(){
    this.showError = false;
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

  if(this.customerName == '' || this.vehicleModel == ''|| (this.contact.toString().length) != 10  || this.address == ''|| this.bookingDate == ''){
    this.showError = true;
  }else{
    this.http.post("https://d2d-booking-be-fzd-api-4.onrender.com/api/bookings", bookingData).subscribe(res => {
      this.isServiceBooked = true;
      setTimeout(() => {
        this.isServiceBooked = false;
      }, 10000)
      console.log("Booked Successfully.");

    })
  }
  }

}
