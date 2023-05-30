import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdittaskService {
  url="http://localhost:8082"

  constructor(private http:HttpClient) { }
  sendData(id:String , data:any){
    return this.http.put(`${this.url}/task/${id}`,data)
  }

  getCurrentData(id:String){
    return this.http.get(`${this.url}/task/${id}`)
  }

  postComment(id : String , data:any){
    return this.http.post(`${this.url}/comment/task/${id}`,data)
  }
}
