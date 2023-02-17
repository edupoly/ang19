import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment as env} from '../environments/environment'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(public http:HttpClient) { }

  getQuestions(){
    return this.http.get(env.quizUrl).pipe(
      map((quiz:any)=>{
        var temp = quiz.map((question:any)=>{
          var ops = [...question.incorrectAnswers,question.correctAnswer];
          ops.sort(() => Math.random() - 0.5);
          return {...question,options:[...ops],selectedAnswer:''}
        })
        return temp
      })
    )
  }
}
