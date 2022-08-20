import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenHandlerInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		return next.handle(this.setToken(request));
	}

	setToken(request: HttpRequest<any>) {
		let token = localStorage.getItem('token');

		return request.clone({
			setHeaders: {
				Authorization: token,
			},
		});
	}
}
