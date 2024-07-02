import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RecruteurService } from 'src/app/services/recruteur.service';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.css']
})
export class AddInterviewComponent implements OnInit {
  addinterviewForm:FormGroup
  entretien:any={}
  constructor(private recruteurService: RecruteurService) { }

  ngOnInit() {
  }
  addInterview(){
    this.recruteurService.ajouterEntretien(this.entretien).subscribe((res=>{
      console.log('entretien ajouté',res);
      alert("votre entretien a ete bien enregistré");
      window.location.reload();   }))
  }
}
