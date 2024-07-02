import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { meetUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetService {

  constructor(private http:HttpClient) { }
  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    console.log(token);
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  recupererAllMeets(){
   return this.http.get(meetUrl+"/allmeets"); 
  }
  ajouterUnMeet(obj){
    return this.http.post(meetUrl+"/ajouter",obj);
  }
}
