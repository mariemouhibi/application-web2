import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { candidatUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http : HttpClient) { }
  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    console.log(token);
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  createCandidate(formData: FormData) {
    return this.http.post<any>(candidatUrl+ '/create', formData);
  }
}

  
 
 
 
 
 
 
    //  <!-- const formData = new FormData();
  //   formData.append('name', cand.name);
  //   formData.append('cin', cand.cin );
  //   formData.append('email', cand.email );
  //   formData.append('diplome', cand.diplome);
  //   formData.append('niveau', cand.niveau );
  //   formData.append('offre', cand.offre );
  //   formData.append('file',cvFile,cvFile.name);-->

  
   




  





