import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';

// import {Component} from '@angular/core';

// /** @title Datepicker action buttons */
// @Component({
//   selector: 'add-task',
//   templateUrl: 'add-task.component.html',
//   styleUrls: ['add-task.component.css'],
// })
// export class DatepickerActionsExample {}

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
