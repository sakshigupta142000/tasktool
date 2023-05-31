import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  // successNotification(){
  //   Swal({
  //     title: "Good job!",
  //     text: "You clicked the button!",
  //     icon: "success",
  //     button: "Aww yiss!",
  //   });
  // }


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
          Swal.fire('Success','User  ' + this.data.username+ '   is successfully registered','success').then(()=>
          window.location.href="/"
          );
        },

        error=>{
          console.log(error);
        }
      
      )

    }
    else{
      // alert("Please fill the mandatory details !!");
      console.log("fields are empty");
      Swal.fire('Warning','Please fill the mandatory details','warning');
    }


    }

}
