import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user={
    email: '',
     name: '',
   password: '',
    userName: '',
    confirmPassword: '',
    level: '',
    adresse: '',
    ville: '',
    experience: null,
    nationality: ''
  }
  
  constructor(
    private userService : UserService,
    private route : Router) {}

  ngOnInit() {
    
  }

  addUser(){
    console.log('hi',this.user);
    this.userService.signup(this.user).subscribe(
      (data)=>{
console.log("here data",data);
alert(" Inscription réussie !")
    });

  }
}
