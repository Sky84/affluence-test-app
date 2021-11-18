import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentContactFormComponent } from './components/appointment-contact-form/appointment-contact-form.component';
import { AppointmentHomeComponent } from './components/appointment-home/appointment-home.component';

const routes: Routes = [
  { path: '', component: AppointmentHomeComponent },
  { path: 'appointment-contact-form', component: AppointmentContactFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
