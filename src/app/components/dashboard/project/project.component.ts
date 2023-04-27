import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';


export interface PeriodicElement {
  id : number,
  projectName : String;
  isActive : Boolean;

}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  elements: Element[] = []; 
  displayedColumns = ['id','projectName' ,'isActive'];
  dataSource = new MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private projectservice:ProjectService){
  }
  ngOnInit(): void {
    this.projectservice.getAllProjects().subscribe(data=>{
      console.log(data)
      this.dataSource= new MatTableDataSource(data);
      //this.Gettingthedata();
    });
}
}

