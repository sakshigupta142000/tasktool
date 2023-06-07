import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditprojectService {
  url="http://localhost:8082"

  constructor(private http:HttpClient) { }
  getCurrentProjectData(id:String){
    return this.http.get(`${this.url}/project/${id}`)
  }

  sendData(id:String , projectdata:any){
    return this.http.put(`${this.url}/project/${id}`,projectdata)
  }
}
