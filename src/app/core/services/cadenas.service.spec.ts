import { TestBed } from '@angular/core/testing';

import { CadenasService } from './cadenas.service';

describe('CadenasService', () => {
  let service: CadenasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadenasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
