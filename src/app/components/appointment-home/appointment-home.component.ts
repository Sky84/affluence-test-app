import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-appointment-home',
  templateUrl: './appointment-home.component.html',
  styleUrls: ['./appointment-home.component.scss']
})
export class AppointmentHomeComponent implements OnInit {

  public appointmentTimes: any[] = [];

  public appointmentDateForm = new FormGroup({
    date: new FormControl(null, Validators.required),
    dateTime: new FormControl(null, Validators.required),
  });

  private appointmentDate: Date = new Date();

  constructor(private router: Router, private reservationService: ReservationService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    const minDate = new Date(new Date().setHours(9, 0, 0));
    const maxDate = new Date(new Date().setHours(20, 0, 0));
    let dateTmp = minDate;
    
    while (dateTmp.getHours() <= maxDate.getHours()) {
      this.appointmentTimes.push(new Date(dateTmp.setMinutes(dateTmp.getMinutes() + 30)));
    }
  }

  public getTimeToViewString(time: Date) {
    const min = time.getMinutes() === 0 ? '00' : time.getMinutes();
    return time.getHours() + 'h' + min;
  }

  public onSubmit() {
    const date = new Date(this.appointmentDateForm.get('date')?.value)
    const dateTime = new Date(this.appointmentDateForm.get('dateTime')?.value);

    this.appointmentDate = new Date(date.setHours(dateTime.getHours(), dateTime.getMinutes()));
    localStorage.setItem('selectedDate', this.appointmentDate.toISOString());
    this.reservationService.getIsDateTimeAvailable(this.appointmentDate.toISOString()).subscribe((result: any) => {
      if (result.available) {
        this.router.navigate(['appointment-contact-form']);
      }
      else {
        this.toastrService.error("Le créneau selectionné n'est pas disponible");
      }
    });
  }

}
