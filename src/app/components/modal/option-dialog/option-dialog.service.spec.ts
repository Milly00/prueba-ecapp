import { TestBed } from '@angular/core/testing';

import { OptionDialogService } from './option-dialog.service';

describe('OptionDialogService', () => {
  let service: OptionDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
