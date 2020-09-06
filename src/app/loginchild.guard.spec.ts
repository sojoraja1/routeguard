import { TestBed } from '@angular/core/testing';

import { LoginchildGuard } from './loginchild.guard';

describe('LoginchildGuard', () => {
  let guard: LoginchildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginchildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
