import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AUTH_URL} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor( private http :HttpClient) { }
 
  signup(obj){
    return this.http.post(AUTH_URL +"/signup",obj);
  }
   login(user){
    return this.http.post<{accessToken}>(AUTH_URL + "/login",user);
   }
  
}
