import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  displayedColumns = ['position','projectname','taskstatus','Assigned_To'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export interface PeriodicElement {
  position: number;
  projectname:string;
  taskstatus:string;
  Assigned_To: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, projectname: 'Bio merchandise', taskstatus:'Active', Assigned_To:'Sakshi' },
  {position: 2,  projectname: 'Task Management Tool', taskstatus:'Active', Assigned_To: 'Akarsh'},
];