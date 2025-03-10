import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  maxDate!: string;
  constructor(private http:HttpClient, private router:Router){

  }

  ngOnInit(): void {

    const currentDate = new Date();

    // Set the minDate to today's date
    this.minDate = currentDate.toISOString().split('T')[0];

    // Calculate the last date of the current month
    const lastDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    this.maxDate = lastDayOfCurrentMonth.toISOString().split('T')[0];
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
        addedBy:"Customer",
  }

  if(this.customerName == '' || this.vehicleModel == ''|| (this.contact.toString().length) != 10  || this.address == ''|| this.bookingDate == ''){
    this.showError = true;
  }else{
    this.isBookingClicked = true
    this.http.post("https://d2d-booking-be-fzd-api-4.onrender.com/api/bookings", bookingData).subscribe(res => {
      this.router.navigate(['/booking'], { state: { bookingData } });
      console.log('bookingData', bookingData);



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
