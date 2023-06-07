import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EdittaskService } from 'src/app/services/edittask.service';
import Swal from 'sweetalert2';


export interface ElementComments {
      id:"",
      comments:"",
      createdOn:"",
      commentedBy:{id:"",username:""},
}

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

    commentedUsers:ElementComments[]=[];
    commentData={
      comments:"",
      commentedById:"",
      taskId:""
    }
    constructor(private http: HttpClient, private edittask:EdittaskService, private router : ActivatedRoute){
  
    }
    ngOnInit() :void {
      this.loadCategory();
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
        console.log(result);
      });
      this.edittask.getCommentsByTaskId(this.router.snapshot.params['id']).subscribe((result:any)=>{
        self.commentedUsers=result;
      });
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
      console.log("Updated Task Submitted");
      // this.data.createdById=JSON.parse(localStorage.getItem('user') || '{}').id;
      console.log(this.data);
      this.edittask.sendData(this.router.snapshot.params['id'],this.data).subscribe(
        response => {
          console.log(response);
          Swal.fire('Success','Task ' + this.data.title+ '  details are successfully updated','success').then(()=>
          window.location.href="/home/task"
          );
        },
        error => {
          console.log(error.error.message);
          Swal.fire('Error',error.error.message,'error');
        }
      )
    }
    submitCommentForm(){
      console.log("comment added");
      // this.comments.commentedById=JSON.parse(localStorage.getItem('user') || '{}').id;
      console.log(this.commentData);
      this.commentData.commentedById=JSON.parse(localStorage.getItem('user') || '{}').id;
      this.commentData.taskId=this.router.snapshot.params['id'];
      let self=this;
      this.edittask.postComment(this.commentData).subscribe(
        response => {
          console.log(response);
          let comment = <ElementComments> response;
          self.commentedUsers.unshift(comment);
          self.commentData.comments = "";
          // Swal.fire('Comment added'+ self.commentData.comments);
        },
        error => {
          console.log(error.error.message);
          alert(error.error.message);
          Swal.fire('Warning','Wrong details','warning');
        }
      )
    }

}
