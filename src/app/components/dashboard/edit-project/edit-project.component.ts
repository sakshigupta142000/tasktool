import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { EditprojectService } from 'src/app/editproject.service';

export interface ElementProjects{
  id:"",
  projectName:"",
  isActive:""
}

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit{
  projectdata={
    id:"",
    projectName:"",
    isActive:""
    }
    id:any;

  constructor(private http: HttpClient,private editproject : EditprojectService, private router : ActivatedRoute){}
    ngOnInit() :void {
      console.log("hello")
      let self=this;
      console.log(this.router.snapshot.params['id']);
      console.log("heyyyyyyyyyyyyy");
      this.editproject.getCurrentProjectData(this.router.snapshot.params['id']).subscribe((result:any)=>{
        self.projectdata.projectName=result.projectName;
        self.projectdata.isActive=result.isActive;
        console.log(result);
      });
      }

      submitProjectForm(){
        console.log("Updated Project Submitted");
      console.log(this.projectdata);
      this.editproject.sendData(this.router.snapshot.params['id'],this.projectdata).subscribe(
        response => {
          console.log(response);
          Swal.fire('Success','Project ' + this.projectdata.projectName+ '  details are successfully updated','success').then(()=>
          window.location.href="/home/project"
          );
        },
        error => {
          console.log(error.error.message);
          alert(error.error.message);
          Swal.fire('Warning','Wrong details','warning');
        }
      )
      }
    }

