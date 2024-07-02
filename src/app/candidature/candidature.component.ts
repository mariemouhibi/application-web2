import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatService } from '../services/candidat.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  addcandidatForm: FormGroup;
  cand: any = {};
  cvFile: File;
  constructor(private candidatService: CandidatService,
  )
  
 {} 
   
  ngOnInit() {}
  // selectFileCV(event: any) {
  //   this.cvFile = event.target.files[0];
  // }

  
  createCandidate(candidat: any, cvFile: File) {
    const formData = new FormData();
    formData.append('candidat', JSON.stringify(candidat));
    formData.append('cv_file', cvFile);
    formData.append('cv_url', 'http://localhost:8082/api/view/attachement/' + cvFile.name);

    this.candidatService.createCandidate(formData).subscribe(
      response => {
        console.log('Candidat créé avec succès', response);
        alert("votre candidature a ete bien enregistrée , bonne chance !");
        window.location.reload();      },
      error => {
        console.error('Erreur lors de la création du candidat', error);
      }
    );
  }

  onSubmit() {
    this.createCandidate(this.cand, this.cvFile);
  }

  onChange(event: any) {
    this.cvFile = event.target.files[0];
  }

      
  

  }