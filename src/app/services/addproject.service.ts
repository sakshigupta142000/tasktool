import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddprojectService {

  url="http://localhost:8082"

  constructor(private http:HttpClient) { }

  sendData(data:any){
    return this.http.post(`${this.url}/project`,data)
  }
}
