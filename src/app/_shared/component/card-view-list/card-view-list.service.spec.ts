import { TestBed } from '@angular/core/testing';

import { CardViewListService } from './card-view-list.service';

describe('CardViewListService', () => {
  let service: CardViewListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardViewListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
