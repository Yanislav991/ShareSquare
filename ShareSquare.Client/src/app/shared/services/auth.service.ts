import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private sub = new Subject<any>();

  constructor() {}

  login(url: string, data: FormGroup) {
    this.sub.next(data);
  }

  logout() {
    this.sub.next(null);
  }

  getAuthData() {
    return this.sub;
  }
}
