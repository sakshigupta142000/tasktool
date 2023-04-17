import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';


export interface Element {
  id: number,
  title: string,
  project : string,
  description: string,
  dueDate: Date,
  assignedTo: string,
  createdOn: Date,
  createdBy: string,
  status: string,
  category: string

}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  elements: Element[] = []; 
  displayedColumns = ['id', 'title','project' ,'description','dueDate','assignedTo','createdOn','createdBy','status','category'];
  dataSource = new MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private taskservice:TaskService){
  }
  ngOnInit(): void {
    this.taskservice.getAllTask().subscribe(data=>{
      console.log(data)
      this.dataSource= new MatTableDataSource(data);
      //this.Gettingthedata();
    });
}
}






