import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUploadFormComponent } from './example-upload-form.component';

describe('ExampleUploadFormComponent', () => {
  let component: ExampleUploadFormComponent;
  let fixture: ComponentFixture<ExampleUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleUploadFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
