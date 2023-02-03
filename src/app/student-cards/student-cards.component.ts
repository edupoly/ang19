import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.css']
})
export class StudentCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname:string='';
  lastname:string='';
  age:number=0;
  students:Array<any>=[];

  addStudent(){
    var newstd = {
      firstname:this.firstname,
      lastname:this.lastname,
      age:this.age
    }
    this.students.push(newstd)
  }

}
