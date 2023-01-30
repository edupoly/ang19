import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang19';
  firstname:string='';
  gen:string|null=null;
  techs:Array<string>=[];
  updateTechs(e:Event|any){
    if(e.target.checked){
      this.techs.push(e.target.value)
    }
    console.log(this.techs)
  }
}
