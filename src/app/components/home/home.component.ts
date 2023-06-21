import { Component , OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user={"username":null,"email":null};
  public loggedIn=false; 

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
    this.user=this.loginService.getUser();
    console.log(this.user);
    console.log("----welcome---");

    
  }
  logoutUser()
  {
    this.loginService.logout()
    location.reload()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Successfully logged Out',
      showConfirmButton: false,
      timer: 200000
    });
  }

}
