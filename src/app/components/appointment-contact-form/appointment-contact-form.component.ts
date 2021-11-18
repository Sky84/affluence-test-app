import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-appointment-contact-form',
  templateUrl: './appointment-contact-form.component.html',
  styleUrls: ['./appointment-contact-form.component.scss']
})
export class AppointmentContactFormComponent implements OnInit {

  public selectedDate?: Date;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const localDate = localStorage.getItem('selectedDate');
    if (localDate) {
      this.selectedDate = new Date(localDate)
    }
  }

  public getLocaleDateView() {
    return moment(this.selectedDate).format('YYYY-MM-DD') + ' at ' + moment(this.selectedDate).format('hh:mm:ss');
  }

  public onBackButtonClick() {
    this.router.navigate([''])
  }

}
