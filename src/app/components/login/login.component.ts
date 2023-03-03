import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService){ }

  ngOnInit(): void {
    
  }

  onSubmit()
  {
    // console.log("form is submitted");
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){

      console.log("We have to submit the form to server");
      this.loginService.generateToken(this.credentials).subscribe(
        response=>{

          console.log(response); //success
        },

        error=>{
          console.log();
        }
      
      )

    }else{
      console.log("Fields are empty !!")
    }
  }

}
