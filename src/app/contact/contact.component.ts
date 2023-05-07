import { Component, OnInit } from '@angular/core';
import { faEnvelope , faPhone, faLocationArrow  } from '@fortawesome/free-solid-svg-icons';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { User } from '../model/user';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPhone=faPhone
  faEnvelope=faEnvelope
  faLocationArrow =faLocationArrow

  user! : User;
  reactiveForm! : FormGroup;


  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.user = new User();
    this.reactiveForm = new FormGroup({
      name: new FormControl(null , Validators.required),
      email: new FormControl(null),
      objet: new FormControl(null),
      message: new FormControl(null),

    })

  }
  save(f: NgForm) {
    console.log(f.value['login'] ,f.value['email'] ,f.value['password']);

  };
  
  submit({value , valid}:{value : User, valid:boolean}): void{
    this.user = value;
    console.log(this.user);
  }

}
