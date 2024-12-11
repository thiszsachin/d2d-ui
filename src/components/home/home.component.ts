import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerName:any=''
  vehicleModel:any=''
  contact:any=''
  address:any=''
  bookingDate:any=''
  userEmail:any='websited2d@gmail.com'
  isServiceBooked:boolean=false;
  showError:boolean=false
  isBookingClicked=false;
  minDate!: string;
  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }



  bookService(){
    this.showError = false;
    const bookingData:any={
      customerName:this.customerName,
        vehicleModel:this.vehicleModel,
        userEmail:this.userEmail,
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
    this.isBookingClicked = true
    this.http.post("https://d2d-booking-be-fzd-api-4.onrender.com/api/bookings", bookingData).subscribe(res => {


      this.isServiceBooked = true;
      this.isBookingClicked = false;
      this.customerName=''
      this.vehicleModel=''
      this.contact=''
      this.address=''
      this.bookingDate=''
      this.userEmail='websited2d@gmail.com'
      setTimeout(() => {
        this.isServiceBooked = false;
      }, 10000)
    })
  }
  }

}
