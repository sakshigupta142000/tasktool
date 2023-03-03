import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8081"

  constructor(private http:HttpClient) { }

 generateToken(credentials:any){

    return this.http.post(`${this.url}/token`,credentials)
  }

  //for login user
  loginUser(token: string)
  {
    localStorage.setItem("token",token)
    return true;
  }


  isLoggedIn()
  {
    let token = localStorage.getItem("token");
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
  }

}
