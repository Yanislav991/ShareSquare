import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient, private router: Router) {}

  registerUser(url: string, userData: FormGroup) {
    if (userData.invalid) {
      throw new Error('o panagiamu');
    }

    const { email, password } = userData.value;
    const body = { email, password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, body, { headers: headers }).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.error(err);
      },
      complete() {
        console.log('complete');
      }
    });
  }
}
