import { TestBed } from '@angular/core/testing';

import { ClientProfileService } from './client-profile.service';

describe('ProfileService', () => {
  let service: ClientProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
