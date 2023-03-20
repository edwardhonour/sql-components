import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTextareaComponent } from './doc-textarea.component';

describe('DocTextareaComponent', () => {
  let component: DocTextareaComponent;
  let fixture: ComponentFixture<DocTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DocTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
