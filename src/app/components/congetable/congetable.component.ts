import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';
import { RecruteurService } from 'src/app/services/recruteur.service';

@Component({
  selector: 'app-congetable',
  templateUrl: './congetable.component.html',
  styleUrls: ['./congetable.component.css']
})
export class CongetableComponent implements OnInit {
  congeStates: {[key: number]: boolean} = {};
  
congeTab:any;
term:any;
m:any;
  constructor(private employeService:EmployeService , private recruteurService: RecruteurService) { 
    const storedCongeStates = localStorage.getItem('congeStates');
    if (storedCongeStates) {
      this.congeStates = JSON.parse(storedCongeStates);
    }
  
  }

  ngOnInit() {
    this.employeService.recupererAllConges().subscribe((res)=>
    {
      this.congeTab=res;
    })
 
  }

  toggleAcceptedConge(id: number) {
    if (this.congeStates[id]) {
      this.congeStates[id] = false;
    } else {
      this.congeStates[id] = true;
    }
    localStorage.setItem('congeStates', JSON.stringify(this.congeStates));
  }

  isCongeAccepted(id: number): boolean {
    return !!this.congeStates[id];
  }
  supprimer(id:number){
    this.recruteurService.supprimerUnCongeById(id).subscribe((res=>{
      console.log("conge supprimer",res);
      alert('le congé est refusé');
      window.location.reload();
    }))
  }
}
