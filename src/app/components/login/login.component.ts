import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    email:'',
    password:''
  }

  constructor(private loginService:LoginService){ }

  ngOnInit(): void {
    
  }

  onSubmit()
  {
    console.log("form is submitted");
    if((this.credentials.email!='' && this.credentials.password!='') && (this.credentials.email!=null && this.credentials.password!=null)){

      console.log("We have to submit the form to server");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{

          console.log(response.token); //success
          this.loginService.loginUser(response.token)
          this.loginService.setUser(response.user)
          window.location.href="/home"
        },

        error=>{
          console.log(error);
        }
      
      )

    }else{
      console.log("Fields are empty !!")
    }
  }

}
