import { TestBed, inject } from '@angular/core/testing';

import { AdminAuthGuradService } from './admin-auth-gurad.service';

describe('AdminAuthGuradService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuradService]
    });
  });

  it('should be created', inject([AdminAuthGuradService], (service: AdminAuthGuradService) => {
    expect(service).toBeTruthy();
  }));
});
