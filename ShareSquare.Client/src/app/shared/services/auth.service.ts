import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private sub = new Subject<any>();

  constructor() {}

  login(email: string, password: string) {
    this.sub.next({ email, password });
  }

  logout() {
    this.sub.next(null);
  }

  getAuthData() {
    return this.sub;
  }
}
