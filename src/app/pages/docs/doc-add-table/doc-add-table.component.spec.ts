import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAddTableComponent } from './doc-add-table.component';

describe('DocAddTableComponent', () => {
  let component: DocAddTableComponent;
  let fixture: ComponentFixture<DocAddTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DocAddTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocAddTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
