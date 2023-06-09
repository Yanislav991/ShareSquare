import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser(url: string, userData: any) {
    if (userData.invalid) {
      throw new Error('o panagiamu');
    }

    const body = userData;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: '*/*'
    });
    return this.http.post(url, body, { headers: headers });
  }
}
