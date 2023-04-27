import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  user=null;
  constructor(private loginService : LoginService){}
  
  ngOnInit(): void{

  //   console.log("---------hey----");
  //   this.loginService.getCurrentUser().subscribe(
  //     (user:any) => {
  //       this.user=user;
  //     },
  //     (error) => {
  //       alert('error');
  //     }
  //   );
  //   // this.user=this.loginService.getUser();
  //   console.log(this.user);
  //   console.log("----welcome---");

  
  // }

}
}
