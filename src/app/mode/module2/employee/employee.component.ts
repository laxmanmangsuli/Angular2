import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/teacher';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.name)
    console.log(this.numarr)
  }
  empid:number=102
  name:string="Laxman Mangsuli"
  numarr:number[]=[100,399,566,3441,444]
  a:number=10
  b:number=199
  

}
