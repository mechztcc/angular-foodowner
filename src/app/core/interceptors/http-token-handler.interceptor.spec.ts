import { TestBed } from '@angular/core/testing';

import { HttpTokenHandlerInterceptor } from './http-token-handler.interceptor';

describe('HttpTokenHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpTokenHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpTokenHandlerInterceptor = TestBed.inject(HttpTokenHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
