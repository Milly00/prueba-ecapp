import { TestBed } from '@angular/core/testing';

import { PutGenericService } from './put-generic.service';

describe('PutGenericService', () => {
  let service: PutGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
