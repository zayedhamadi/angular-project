import { TestBed } from '@angular/core/testing';

import { ServicesssssService } from './servicesssss.service';

describe('ServicesssssService', () => {
  let service: ServicesssssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesssssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
