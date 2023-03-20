import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRadioGroupComponent } from './example-radio-group.component';

describe('ExampleRadioGroupComponent', () => {
  let component: ExampleRadioGroupComponent;
  let fixture: ComponentFixture<ExampleRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleRadioGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
