import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentContactFormComponent } from './appointment-contact-form.component';

describe('AppointmentContactFormComponent', () => {
  let component: AppointmentContactFormComponent;
  let fixture: ComponentFixture<AppointmentContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
