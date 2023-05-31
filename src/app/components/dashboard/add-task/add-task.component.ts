import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddtaskService } from 'src/app/services/addtask.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  data={
  projectId:"",
  title:"",
  description:"",
  dueDate:"",
  statusId:"",
  assignedToId:"",
  createdById:"",
  createdOn:"",
  taskCategoryId:""
  }
  categories:any []=[];
  allstatus:any []=[];
  allusers:any []=[];
  projects:any []=[];
  constructor(private http: HttpClient, private addtask:AddtaskService){
    // private addtask:AddTaskComponent

  }
  ngOnInit(){
    this.loadCategory();
    this.loadStatus();
    this.loadAllUser();
    this.loadProject();

  }

    loadCategory(){
      this.http.get('http://localhost:8082/taskcategory').subscribe((result:any)=> {
        this.categories = result;
        console.log(this.categories);
      })
    }

    loadStatus(){
      this.http.get('http://localhost:8082/taskstatus').subscribe((result:any)=> {
        this.allstatus = result;
        console.log(this.allstatus);
      })
    }

    loadAllUser(){
      this.http.get('http://localhost:8081/allUsers').subscribe((result:any)=> {
        this.allusers = result;
        console.log(this.allusers);
      })
    }


    loadProject(){
      this.http.get('http://localhost:8082/project').subscribe((result:any)=> {
        this.projects = result;
        console.log(this.projects);
      })
    }

     submitTheForm(){
    console.log("Task Submitted");
    this.data.createdById=JSON.parse(localStorage.getItem('user') || '{}').id;
    console.log(this.data);
    this.addtask.sendData(this.data).subscribe(
      response => {
        console.log(response);
        // alert("Task Added Successfully !!");
        Swal.fire('Success','Task ' + this.data.title+ '  is successfully assigned','success').then(()=>
          window.location.href="/home/task"
          );
      },
      error => {
        console.log(error.error.message);
        Swal.fire('Warning','Please fill the correct details','warning');
      }
    )
  }


}
