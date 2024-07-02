import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruteurService } from 'src/app/services/recruteur.service';

@Component({
  selector: 'app-entretien-table',
  templateUrl: './entretien-table.component.html',
  styleUrls: ['./entretien-table.component.css']
})
export class EntretienTableComponent implements OnInit {
interviewTab:any;
m:any;
  constructor(private recruteurService :RecruteurService,
    private router:Router) { }

  ngOnInit() {
    this.recruteurService.recupererAllEntretien().subscribe((res)=>{
      this.interviewTab=res
    }
    );
  }
  supprimer(id){
    return this.recruteurService.supprimerUnEntretienById(id).subscribe(
      (res)=>{
        console.log("Résultat de la suppression :", res);
      },
      (error) => {
        console.error("Erreur lors de la suppression :", error);
      }
    );
      }
      onAddInterview(){
       this.router.navigate(['/dashboard/entretien/addentretien']); 
      }
  }

