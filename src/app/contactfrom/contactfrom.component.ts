import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-contactfrom',
  templateUrl: './contactfrom.component.html',
  styleUrls: ['./contactfrom.component.css']
})
export class ContactfromComponent implements OnInit {

  constructor(public http:HttpClient) { }

  contactForm:FormGroup=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.maxLength(10),this.checkFn]),
    lastname:new FormControl(),
    username:new FormControl('',{
      asyncValidators: [this.checkUsername.bind(this)],
      updateOn: 'blur'
    }),
    dob:new FormControl('',Validators.required)
  });

  get firstname(){
    return this.contactForm.get('firstname') as FormControl
  }

  ngOnInit(): void {

  }
  ngDoCheck(){
    console.log(this.contactForm)
  }
  register(){
    if(!this.contactForm.valid){
      this.contactForm.markAsTouched()
      this.firstname.markAllAsTouched()
      this.contactForm.controls['lastname'].markAsTouched();
      this.contactForm.controls['dob'].markAsTouched();
    }
    console.log('contactform::',this.contactForm)
  }
  checkFn(fn:FormControl){
    return {} 
  }
  checkUsername(fn:any){

    var p:any = new Promise((resolve,reject)=>{
      this.http.get("https://fakestoreapi.com/users").subscribe((res:any)=>{

        var x = res.find((u:any)=>{
          if(u.username===fn.value){
            return true
          }
          else{
            return false;
          }
        })
        if(x){
          resolve({'usernameExist':'username already taken'})
        }
        else{
          resolve(null)
        }
      })
    });
    
    return p;
  }
}
