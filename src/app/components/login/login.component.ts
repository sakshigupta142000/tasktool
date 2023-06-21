import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

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
          console.log(response);
          window.location.href="/home/task"
          // Swal.fire('Good job!!','You have successfully logged In','success').then(()=>
          // window.location.href="/home"
          // );
        },

        error=>{
          console.log(error.error.message);
          if (error.error.message){
            Swal.fire('Error',error.error.message,'error');
          }
          else{
            Swal.fire('Warning','Please fill the correct details','warning');
          }
        }
      
      )

    }
  }

}
