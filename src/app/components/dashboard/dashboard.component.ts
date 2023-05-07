import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user={"username":null,"email":null,"profile":null};
  constructor(private loginService : LoginService){}
  
  ngOnInit(): void{

    console.log("---------dashboard----");
    this.user=this.loginService.getUser();
    console.log(this.user);
    console.log("-welcome to the dashboard---");
  }
}
