import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCardPageComponent } from './doc-card-page.component';

describe('DocCardPageComponent', () => {
  let component: DocCardPageComponent;
  let fixture: ComponentFixture<DocCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DocCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
