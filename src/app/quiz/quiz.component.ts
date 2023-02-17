import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public qs:QuizService) { }
  questions:any=[];
  isSubmitted:boolean=false;
  ngOnInit(): void {
    this.qs.getQuestions().subscribe((questions)=>{
      console.log("Questions::",questions)
      this.questions=questions;
    })
  }
  quizSubmit(){
    this.isSubmitted=true;
  }
  markAnswer(ans:string,index:number){
    this.questions[index].selectedAnswer=ans;
  }
}
