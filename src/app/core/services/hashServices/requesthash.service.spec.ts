import { TestBed } from '@angular/core/testing';

import { RequesthashService } from './requesthash.service';

describe('RequesthashService', () => {
  let service: RequesthashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequesthashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
