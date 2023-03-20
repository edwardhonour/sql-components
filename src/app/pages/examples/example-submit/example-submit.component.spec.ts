import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSubmitComponent } from './example-submit.component';

describe('ExampleSubmitComponent', () => {
  let component: ExampleSubmitComponent;
  let fixture: ComponentFixture<ExampleSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
