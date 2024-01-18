import { TestBed } from '@angular/core/testing';

import { PostGenericService } from './post-generic.service';

describe('PostGenericService', () => {
  let service: PostGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
