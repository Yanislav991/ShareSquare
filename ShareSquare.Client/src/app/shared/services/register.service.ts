import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient, private router: Router) {}

  registerUser(url: string, userData: any) {
    if (userData.invalid) {
      throw new Error('o panagiamu');
    }

    const body = userData;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: '*/*'
    });
    console.log(body)
    return this.http.post(url, body, { headers: headers });
  }
}
