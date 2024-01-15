import { Component, OnInit } from '@angular/core';
// first
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
//
import { ReservationService } from '../reservation/reservation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private reservationService : ReservationService, 
    private router : Router
    ) {

  }

  // second
  reservationForm: FormGroup = new FormGroup({})
  //  
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [ Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    })
  }

  //Fifth - adding method
  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('Valid');
      let reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);
      this.router.navigate(['/list'])
    }
    else {
      console.log('Invalid')
    }
  }
 //

}
