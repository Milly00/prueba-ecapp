import { TestBed } from '@angular/core/testing';

import { GetGenericService } from './get-generic.service';

describe('GetGenericService', () => {
  let service: GetGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
