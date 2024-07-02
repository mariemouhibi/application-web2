import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruteurService } from 'src/app/services/recruteur.service';

@Component({
  selector: 'app-candidattable',
  templateUrl: './candidattable.component.html',
  styleUrls: ['./candidattable.component.css']
})
export class CandidattableComponent implements OnInit {
  candidatTab:any;
term:any;
  id:any;
  m:any;
  
  constructor(private recruteurService :RecruteurService,
    private router : Router) { }

  ngOnInit() {
    this.recruteurService.recupererAllCandidats().subscribe(
      (candidats: any[]) => {
        this.candidatTab = candidats;
      },
      error => {
        console.error('Erreur lors de la récupération des candidats', error);
      }
      
    );
  
 
  
  }
  
       
  voirCV(cvUrl: string) {
    this.recruteurService.convertFileToBase64(cvUrl).subscribe(
       (base64String: string) => {
        this.save(base64String, 'cvUrl.pdf'); // ajustez le nom du fichier si nécessaire
     },
     error => {
       console.error('Erreur lors de la conversion du CV en base64', error);     
     }
    );
}

  acceptCandidate(id) {
    this.router.navigate(['/dashboard/candidat/listecandidatpreselectionee',id]);
  }
 
  suppCandidat(id){
    return this.recruteurService.supprimerCaandidatById(id).subscribe((res=>{
      console.log("candidat supprimé",res);
      alert("suppression faite avec succés!!");
        window.location.reload();
    }))
  
  }

save(base64String: string, fileName: string) {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const fileBlob = new Blob([byteArray], { type: 'application/pdf' });

  saveAs(fileBlob, fileName);
}
}
  
function saveAs(fileBlob: Blob, fileName: string) {
  throw new Error('Function not implemented.');
}

