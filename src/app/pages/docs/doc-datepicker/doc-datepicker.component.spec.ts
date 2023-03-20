import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDatepickerComponent } from './doc-datepicker.component';

describe('DocDatepickerComponent', () => {
  let component: DocDatepickerComponent;
  let fixture: ComponentFixture<DocDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DocDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
