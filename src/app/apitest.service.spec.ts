import { TestBed } from '@angular/core/testing';

import { ApitestService } from './apitest.service';

describe('ApitestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApitestService = TestBed.get(ApitestService);
    expect(service).toBeTruthy();
  });
});
