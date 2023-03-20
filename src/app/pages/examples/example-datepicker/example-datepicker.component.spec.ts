import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDatepickerComponent } from './example-datepicker.component';

describe('ExampleDatepickerComponent', () => {
  let component: ExampleDatepickerComponent;
  let fixture: ComponentFixture<ExampleDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
