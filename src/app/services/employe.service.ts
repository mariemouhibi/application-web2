import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeUrl } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) 
export class EmployeService {

  constructor(private http : HttpClient) { }
  
  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    console.log(token);
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  supprimerUnEmployeById (id){
   // const headers = this.getHeaders();
  return this.http.delete(employeUrl + "/delete/" + id );
  }
  modifierEmploye(Obj){
    return this.http.post(employeUrl + "/update",Obj);
  }
  getEmployeById(id){
    return this.http.get(employeUrl + "/info/" + id);
  }
  receuperAllEmployes(){
    return this.http.get(employeUrl+"/allinfo/all");
  }
  creeUnEmploye(Obj){
    return this.http.post(employeUrl+"/create",Obj);
  }
  recupererAllConges(){
    return this.http.get(employeUrl+"/allconge/conge");
  }
  getConge(obj){
   return this.http.post(employeUrl+"/conges",obj);
  }
  getEmployeeByEmail(email){
    let params = new HttpParams();
params = params.append('email', email);
return this.http.get(employeUrl+"/by-email", {params: params});
   
  }
}
