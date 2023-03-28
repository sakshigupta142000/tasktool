import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  data={
    username:'',
    email:'',
    password:''

  }
  constructor(private signupService:SignupService){}  // inject signup service

  ngOnInit(): void{

  
  }


  submitTheForm(){
 
    if((this.data.username!='' && this.data.email!='' && this.data.password!='') && (this.data.username!=null && this.data.email!=null && this.data.password!=null)){

      console.log("we have to submit the details");

      this.signupService.dosignup(this.data).subscribe(
        (response:any)=>{

          window.location.href="/"
        },

        error=>{
          console.log(error);
        }
      
      )

    }
    else{
      console.log("fields are empty");
    }


    }

}
