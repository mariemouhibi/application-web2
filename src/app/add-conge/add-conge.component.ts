import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit {
addcongeForm:FormGroup
conge:any={}
  constructor(private employeService:EmployeService) { }

  ngOnInit() {
  }
  ajouterUnConge(){
    this.employeService.getConge(this.conge).subscribe((res =>{
      console.log("here backend",res)
      alert("votre conge a ete bien enregistré");
      window.location.reload();

    }))
  }
}
