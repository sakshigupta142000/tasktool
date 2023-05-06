import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  user={"username":null,"email":null};
  constructor(private loginService : LoginService){}
  
  ngOnInit(): void{

    console.log("---------hey----");
    this.user=this.loginService.getUser();
    console.log(this.user);
    console.log("----welcome---");


    // .subscribe(
    //   (user:any)=>{
    //     this.user=user;
    //   },
    //   (error:any) =>{
    //     console.log(error);
    
    //   }
    // );
  //   // this.user=this.loginService.getUser();
  //   console.log(this.user);
  //   console.log("----welcome---");

  
  // }

}
}
