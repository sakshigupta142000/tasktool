import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EdittaskService } from 'src/app/services/edittask.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  data={
    id:"",
    projectId:"",
    title:"",
    description:"",
    dueDate:"",
    statusId:"",
    assignedToId:"",
    createdById:"",
    taskCategoryId:""
    }
    id:any;
    categories:any []=[];
    allstatus:any []=[];
    allusers:any []=[];
    projects:any []=[];

    comments={
      id:"",
      comments:"",
      createdOn:"",
      commentedById:"",
      task:""
    }
    commentedUsers:any[]=[];
    constructor(private http: HttpClient, private edittask:EdittaskService, private router : ActivatedRoute){
  
    }
    ngOnInit() :void {
      this.loadCategory();
      // this.loadComments();
      // this.getCommentsByTaskId();
      this.loadStatus();
      this.loadAllUser();
      this.loadProject();
      let self=this;
      console.log(this.router.snapshot.params['id']);
      this.edittask.getCurrentData(this.router.snapshot.params['id']).subscribe((result:any)=>{
        self.data.title=result.title;
        self.data.projectId=result.project.id;
        self.data.description=result.description;
        self.data.statusId=result.status.id;
        self.data.assignedToId=result.assignedTo.id;
        self.data.createdById=result.createdBy.id;
        self.data.taskCategoryId=result.category.id;
        self.data.dueDate=result.dueDate;
        console.log(result)
      });
    }
    // loadComments(){
    //   this.http.get('http://localhost:8082/comment').subscribe((result:any)=> {
    //       this.commentedUsers = result;
    //       console.log(this.commentedUsers);
    //     })
    // }
    // getCommentsByTaskId(){}

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
      console.log("Updated Task Submitted");
      // this.data.createdById=JSON.parse(localStorage.getItem('user') || '{}').id;
      console.log(this.data);
      this.edittask.sendData(this.router.snapshot.params['id'],this.data).subscribe(
        response => {
          console.log(response);
          alert("Task edited Successfully !!");
        },
        error => {
          console.log(error.error.message);
          alert(error.error.message);
        }
      )
      // console.log("comment added");
      // this.comments.commentedById=JSON.parse(localStorage.getItem('user') || '{}').id;
      // console.log(this.comments);
      // this.edittask.postComment(this.id,this.comments).subscribe(
      //   response => {
      //     console.log(response);
      //     alert("Task Added Successfully !!");
      //   },
      //   error => {
      //     console.log(error.error.message);
      //     alert(error.error.message);
      //   }
      // )
    }

}
