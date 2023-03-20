import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocFullcalendarComponent } from './doc-fullcalendar.component';

describe('DocFullcalendarComponent', () => {
  let component: DocFullcalendarComponent;
  let fixture: ComponentFixture<DocFullcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DocFullcalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocFullcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
