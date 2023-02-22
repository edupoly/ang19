import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-contactfrom',
  templateUrl: './contactfrom.component.html',
  styleUrls: ['./contactfrom.component.css']
})
export class ContactfromComponent implements OnInit {

  constructor() { }
  contactForm:FormGroup=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    lastname:new FormControl(),
    dob:new FormControl('',Validators.required)
  });
  ngOnInit(): void {

  }
  register(){
    console.log('contactform::',this.contactForm)
  }
}
