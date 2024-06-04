import { TestBed } from '@angular/core/testing';

import { TranspService } from './transp.service';

describe('TranspService', () => {
  let service: TranspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
