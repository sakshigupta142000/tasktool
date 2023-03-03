import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskcategoryComponent } from './add-taskcategory.component';

describe('AddTaskcategoryComponent', () => {
  let component: AddTaskcategoryComponent;
  let fixture: ComponentFixture<AddTaskcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
