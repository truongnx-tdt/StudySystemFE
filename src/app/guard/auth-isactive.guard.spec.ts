import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authIsactiveGuard } from './auth-isactive.guard';

describe('authIsactiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authIsactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
