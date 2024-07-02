import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RecruteurService } from 'src/app/services/recruteur.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  addJobForm:FormGroup
  job:any= {}
  constructor(private recruteurService : RecruteurService) { }

  ngOnInit() : void{
  
  }
  ajouterOffre(){
this.recruteurService.ajouterOffre(this.job).subscribe((res=>{
  console.log("job ajoutée",res)
  alert("votre offre d'emploi a ete bien enregistrée");
      window.location.reload();
}))

  }
  
}


