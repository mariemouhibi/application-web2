import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {
  addemployeForm:FormGroup
  employes:any= {}
  constructor(private employeService : EmployeService) { }

  ngOnInit() {
  }
  ajouteremployer(){
this.employeService.creeUnEmploye(this.employes).subscribe((res =>{
    console.log("here BE",res)
    alert("Votre employé a été ajouté avec succès !");
  }
  ));
  }
//let e =JSON.parse(localStorage.getItem("employes")|| "[]");
//let employeId =JSON.parse(localStorage.getItem("employeId") || "0");
//console.log(this.employes);
//this.employes.id=employeId;
//e.push(this.employes);
//localStorage.setItem("employes",JSON.stringify(e));
//localStorage.setItem("employeId",JSON.stringify(employeId+1));
}


