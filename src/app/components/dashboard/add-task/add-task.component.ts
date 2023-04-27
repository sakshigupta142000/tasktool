import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  projectId: string = '';
  title:  string = '';
  description:  string = '';
  dueDate: string = '';
  statusId:  string = '';
  assignedToId:  string = '';
  createdById:  string = '';
  createdOn:  string = '';
  taskCategoryId:  string = '';
  categories:any []=[];
  allstatus:any []=[];
  allusers:any []=[];
  projects:any []=[];
  constructor(private http: HttpClient){


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

}
