import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  displayedColumns = ['position', 'name','projectname','desc','startdate','duedate','taskstatus','Assigned_To','created_By','created_on','task_category'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  position: number;
  name: string;
  projectname:string;
  desc:string;
  startdate:string;
  duedate:string;
  taskstatus:string;
  Assigned_To: string;
  created_By: string;
  created_on: string;
  task_category:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Login', projectname: 'Bio merchandise',desc: 'Create login page' ,startdate: '02/01/2023',  duedate:'08/03/2023', taskstatus:'Active', Assigned_To: 'Sakshi', created_By: 'Aakash sharma',created_on: '31/12/2022',task_category:'Developer' },
  {position: 2, name: 'sign-up', projectname: 'Task Management Tool', desc: 'Create home page' , startdate: '01/02/2023' ,duedate:'05/03/2023', taskstatus:'Active', Assigned_To: 'Akarsh', created_By: 'Aakash sharma',created_on: '30/12/2022',task_category:'Developer' },
];





