import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url="http://localhost:8081"

  constructor(private http:HttpClient) { } 

  dosignup(data:any){

    return this.http.post(`${this.url}/signup`,data)
  }
}
