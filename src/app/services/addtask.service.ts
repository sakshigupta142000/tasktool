import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddtaskService {

  url="http://localhost:8082"
  constructor(private http:HttpClient) { }
  sendData(data:any){
    return this.http.post(`${this.url}/task`,data)
  }
}
