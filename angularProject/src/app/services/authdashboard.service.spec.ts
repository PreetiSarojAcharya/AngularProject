import { TestBed } from '@angular/core/testing';

import { AuthdashboardService } from './authdashboard.service';

describe('AuthdashboardService', () => {
  let service: AuthdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
