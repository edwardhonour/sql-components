import { TestBed } from '@angular/core/testing';

import { SqllabsComponentsService } from './sqllabs-components.service';

describe('SqllabsComponentsService', () => {
  let service: SqllabsComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqllabsComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
