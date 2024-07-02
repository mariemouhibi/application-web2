import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  user:any={}
  isLoginFailed:boolean;
  isLoggedIn:boolean;
  roles:[];
  constructor(private userService : UserService,
   private tokenStorage : TokenStorageService,
   private router:Router ) { }

  ngOnInit() {
  }
  login(){
    console.log("here user",this.user);
    this.userService.login(this.user).subscribe(
      (data: any) => {
         console.log("on login");;
          console.log(data);
        this.tokenStorage.saveToken(data.data.access_token); 
        this.tokenStorage.saveUser(data.data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log("ROLE",this.roles);
        
        if (this.user.email === "jean@yahoo.com" && this.user.password === "1234") {
          this.router.navigate(["/dashboardemploye"]);
      } else {
        this.router.navigate(["/dashbord"]);
      }},

    );
  }

}
