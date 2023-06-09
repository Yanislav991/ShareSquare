import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '@shared/types';
import { Observable, Subject, catchError } from 'rxjs';
import {
  HandleError,
  HttpErrorHandlerService
} from './http-error-handler.service';

@Injectable()
export class AuthService {
  private registerUrl = 'https://localhost:7195/Auth/register';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    accept: '*/*'
  });

  private sub = new Subject<any>();
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private router: Router,
    httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createHandleError('AuthService');
  }

  register(body: IUser): Observable<IUser> {
    return this.http
      .post<IUser>(this.registerUrl, body, { headers: this.headers })
      .pipe(catchError(this.handleError('body', body)));
  }

  login(url: string, data: FormGroup) {
    this.sub.next(data);
  }

  logout() {
    this.sub.next(null);
  }

  getAuthData() {
    return this.sub;
  }

  setAuthData(data: any) {
    this.sub.next(data);
  }
}
