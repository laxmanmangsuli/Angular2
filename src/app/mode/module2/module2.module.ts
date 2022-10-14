import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentListComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    StudentListComponent,EmployeeComponent
  ]
})
export class Module2Module { }
