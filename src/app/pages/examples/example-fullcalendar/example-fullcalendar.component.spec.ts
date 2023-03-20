import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFullcalendarComponent } from './example-fullcalendar.component';

describe('ExampleFullcalendarComponent', () => {
  let component: ExampleFullcalendarComponent;
  let fixture: ComponentFixture<ExampleFullcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleFullcalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFullcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
