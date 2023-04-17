import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url="http://localhost:8082"

  constructor(private http:HttpClient) { }

  sendData(data:any){
    return this.http.post(`${this.url}/task`,data)
  }

  public getAllTask():Observable<Element[]>{
    return this.http.get<Element[]>(`${this.url}/task`)
  }
}
