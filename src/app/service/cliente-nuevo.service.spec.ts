import { TestBed } from '@angular/core/testing';

import { ClienteNuevoService } from './cliente-nuevo.service';

describe('ClienteNuevoService', () => {
  let service: ClienteNuevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteNuevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
