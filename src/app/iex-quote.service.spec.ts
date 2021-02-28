import { TestBed } from '@angular/core/testing';

import { IexQuoteService } from './iex-quote.service';

describe('IexQuoteService', () => {
  let service: IexQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IexQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
