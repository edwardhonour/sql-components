import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqllabsComponentsComponent } from './sqllabs-components.component';

describe('SqllabsComponentsComponent', () => {
  let component: SqllabsComponentsComponent;
  let fixture: ComponentFixture<SqllabsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqllabsComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqllabsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
