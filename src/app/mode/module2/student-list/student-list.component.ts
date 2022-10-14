import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/address';
import { Teacher } from 'src/app/teacher';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.Id);
    console.log(this.addr);
    console.log(this.arrstu);

  }
  Id:number=101;
  addr:string="pune"
  arrstu:number[]=[3666,55,333]
  name:any="Vilas";

  anyclick(){
    alert("Success")
    console.log(this.addr);
  }
  paddress:any="Pune"
  t:Teacher={
    tid: 1,
    tname: 'Mahesh',
    tadd: 'Sangli',
    addr: {
      pincode: 416416,
    area: 'Vishrambag'

    }
  }
 

}
