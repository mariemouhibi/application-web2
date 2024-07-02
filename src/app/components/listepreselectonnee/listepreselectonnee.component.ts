import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecruteurService } from 'src/app/services/recruteur.service';
import { SelectionService } from 'src/app/services/selection-service.service';

@Component({
  selector: 'app-listepreselectonnee',
  templateUrl: './listepreselectonnee.component.html',
  styleUrls: ['./listepreselectonnee.component.css']
})
export class ListepreselectonneeComponent implements OnInit {
id:any;
candidatTab:any
candidate={}

  constructor(private recuruteurservice: RecruteurService,
    private activatedtoute:ActivatedRoute,private selectionservice: SelectionService) {
      
     }
    
    
 
    ngOnInit() {
      this.id = this.activatedtoute.snapshot.paramMap.get("id");
       this.recuruteurservice.recupererCandidatById(this.id).subscribe((res) => {

this.candidatTab=res;
        console.log("candidat ajouté",res);
    })}
  
  
    // removeSelectedCandidate(candidate: any) {
    //   this.selectionservice.removeSelectedCandidate(candidate);
    // }
  
    // getSelectedCandidates() {
    //   return this.selectionservice.getSelectedCandidates();
    // }
  }
      