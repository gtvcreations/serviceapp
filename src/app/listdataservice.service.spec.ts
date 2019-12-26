import { TestBed } from '@angular/core/testing';

import { ListdataserviceService } from './listdataservice.service';

describe('ListdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListdataserviceService = TestBed.get(ListdataserviceService);
    expect(service).toBeTruthy();
  });
});
