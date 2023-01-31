import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _sanitizer: DomSanitizer) { }
  title = 'ang19';
  firstname:string='';
  myimg:any;
  gen:string|null=null;
  techs:Array<string>=[];
  selectedCountry:string='';
  updateTechs(e:Event|any){
    if(e.target.checked){
      this.techs.push(e.target.value)
    }
    else{
      this.techs = this.techs.filter((tech)=>{
        if(e.target.value!==tech){
          return true
        }
        else{
          return false
        }
      })
    }
    console.log(this.techs)
  }
  updateimg(e:Event|any){
    var element = e.target;
    console.log('element', element);
    var fileRef = e['target'].files[0];
    var reader:any = new FileReader();
    reader.readAsDataURL(fileRef);
    
    reader.onloadend =  ()=>{
      var src = reader.result.toString();
      console.log(src)
      this.myimg=src;
    };
  }
}
