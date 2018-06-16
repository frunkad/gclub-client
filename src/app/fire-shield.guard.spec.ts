import { TestBed, async, inject } from '@angular/core/testing';

import { FireShieldGuard } from './fire-shield.guard';

describe('FireShieldGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireShieldGuard]
    });
  });

  it('should ...', inject([FireShieldGuard], (guard: FireShieldGuard) => {
    expect(guard).toBeTruthy();
  }));
});
