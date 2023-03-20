import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUploadFormComponent } from './doc-upload-form.component';

describe('DocUploadFormComponent', () => {
  let component: DocUploadFormComponent;
  let fixture: ComponentFixture<DocUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DocUploadFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
