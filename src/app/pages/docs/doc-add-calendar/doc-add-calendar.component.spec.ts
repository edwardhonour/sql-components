import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAddCalendarComponent } from './doc-add-calendar.component';

describe('DocAddCalendarComponent', () => {
  let component: DocAddCalendarComponent;
  let fixture: ComponentFixture<DocAddCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DocAddCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocAddCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
