import { Component } from '@angular/core';
import { AddprojectService } from 'src/app/services/addproject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {


  data={
    
    projectName:"",
    isActive:true,
  
  }

  constructor(private addproject:AddprojectService){}

  submitTheForm(){
    console.log("Project Submitting to the Server");
    console.log(this.data);
    this.addproject.sendData(this.data).subscribe(
      response => {
        console.log(response);
        Swal.fire('Good job!','Project ' + this.data.projectName+ '  is successfully added','success').then(()=>
        window.location.href="/home/project"
        );
      },
      error => {
        console.log(error.error.message);
        Swal.fire('Warning','Please fill the correct details','warning');
      }
    )
  }

}
