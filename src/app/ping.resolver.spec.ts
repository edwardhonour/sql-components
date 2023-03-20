import { TestBed } from '@angular/core/testing';

import { PingResolver } from './ping.resolver';

describe('PingResolver', () => {
  let resolver: PingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
