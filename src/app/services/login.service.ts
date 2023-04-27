import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8081"

  constructor(private http:HttpClient) { }

 generateToken(credentials:any){

    return this.http.post(`${this.url}/token`,credentials)
  }

  // public getCurrentUser(){
  //   // var headers=new HttpHeaders();
  //   // const header = {Authorization: `Bearer ${localStorage.getItem('token')}` }
  //   // headers.append("Authorization","Bearer "+localStorage.getItem('token'));
  //   var header = new HttpHeaders({ 
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + localStorage.getItem('token')
  //  });
  //   return this.http.get(`${this.url}/getcurrentuser`,{headers: header});
  // }

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
    localStorage.removeItem('user');
    return true;
  }

  getToken(){
    return localStorage.getItem('token')
  }

  public setUser(user:string){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
   let userStr = localStorage.getItem("user");
   console.log(localStorage.getItem('token'));
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }
}
