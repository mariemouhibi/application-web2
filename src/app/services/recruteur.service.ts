import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { recruteurUrl } from 'src/environments/environment';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecruteurService {

  constructor(private http : HttpClient) { }
 
  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    console.log(token);
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
recupererAllCandidats() {
    return this.http.get(recruteurUrl+"/allcandidats");
  
}
convertFileToBase64(cvUrl: string) {
  return this.http.get("http://localhost:8082/api/view/attachement/" + cvUrl)}
  recupererAllEntretien(){
    return this.http.get(recruteurUrl+"/Allentretien");
  }
  supprimerUnEntretienById(id){
    return this.http.delete(recruteurUrl+"/delete/" + id);
  }
  supprimerCaandidatById(id){
    return this.http.delete(recruteurUrl+"/supp/" + id);
  }
  recupererCandidatById(id){
    return this.http.get(recruteurUrl+"/recupere/"  +id);
  }
  ajouterEntretien(obj){
    return this.http.post(recruteurUrl+"/entretien",obj);
  }
  ajouterCandidat(obj){
    return this.http.post(recruteurUrl+"/ajouter" ,obj);
  }
  supprimerUnCongeById(id){
    return this.http.delete(recruteurUrl+"/supprimer/" + id);
  }
recupererAllOffres(){
  return this.http.get("http://localhost:8082/api/public/alloffres");

}
ajouterOffre(obj){
  return this.http.post(recruteurUrl+"/ajoutoffre" , obj);
}
}


function saveAs(fileBlob: Blob, fileName: string) {
  throw new Error('Function not implemented.');
}

