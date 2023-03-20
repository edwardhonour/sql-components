import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAddTableComponent } from './example-add-table.component';

describe('ExampleAddTableComponent', () => {
  let component: ExampleAddTableComponent;
  let fixture: ComponentFixture<ExampleAddTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleAddTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleAddTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
