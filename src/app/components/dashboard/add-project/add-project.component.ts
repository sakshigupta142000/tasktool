import { Component } from '@angular/core';
import { AddprojectService } from 'src/app/services/addproject.service';

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
        alert("Project Added Successfully !!");
      },
      error => {
        console.log(error.error.message);
        alert(error.error.message);
      }
    )
  }

}
