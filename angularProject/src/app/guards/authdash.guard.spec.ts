import { TestBed } from '@angular/core/testing';

import { AuthdashGuard } from './authdash.guard';

describe('AuthdashGuard', () => {
  let guard: AuthdashGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthdashGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
