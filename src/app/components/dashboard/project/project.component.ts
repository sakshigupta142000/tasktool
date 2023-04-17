import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  displayedColumns = ['position','projectname','projectstatus'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export interface PeriodicElement {
  position: number;
  projectname:string;
  projectstatus:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, projectname: 'Bio merchandise', projectstatus:'Active'},
  {position: 2,  projectname: 'Task Management Tool', projectstatus:'Active'},
];