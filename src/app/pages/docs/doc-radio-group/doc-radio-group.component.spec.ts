import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocRadioGroupComponent } from './doc-radio-group.component';

describe('DocRadioGroupComponent', () => {
  let component: DocRadioGroupComponent;
  let fixture: ComponentFixture<DocRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DocRadioGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
