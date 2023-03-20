import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSubmitComponent } from './doc-submit.component';

describe('DocSubmitComponent', () => {
  let component: DocSubmitComponent;
  let fixture: ComponentFixture<DocSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DocSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
