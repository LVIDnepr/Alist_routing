import { TestBed, inject } from '@angular/core/testing';

import { AlistService } from './alist.service';

describe('AlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlistService]
    });
  });

  it('should be created', inject([AlistService], (service: AlistService) => {
    expect(service).toBeTruthy();
  }));
});
