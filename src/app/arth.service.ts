import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  mysub = new Subject();

  div(a:number,b:number):Observable<any>{
    return of(a/b)
  }

  mul(a:number,b:number):void{
    this.mysub.next(a*b)
  }
  
}
