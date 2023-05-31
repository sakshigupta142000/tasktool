import { Component , OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  public loggedIn=false; 

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
    
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
