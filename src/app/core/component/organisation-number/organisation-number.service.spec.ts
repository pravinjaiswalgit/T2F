import { TestBed } from '@angular/core/testing';

import { OrganisationNumberService } from './organisation-number.service';

describe('OrganisationNumberService', () => {
  let service: OrganisationNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganisationNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
