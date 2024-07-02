import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
employerTab:any;
m:any;
  constructor( private router :Router,
    private employeService :EmployeService) { }
 
   
  ngOnInit() {
    /**
     * 1 getall employe :: employerTab
     *  modal verification :en cas de suppression :
     *    suppresion:
          * (res)=>{
              employerTab.remove by id index  

            }
     *           
     */
    this.employeService.receuperAllEmployes().subscribe(( res)=>{
        this.employerTab=res
      }
      );
      console.log("resultat",this.employerTab);
  }
  goToEdit(id){
    this.router.navigate(['editemploye/' + id], {
      state:{
        data: id
      }
    });  }
  supprimer(id) {
     return this.employeService.supprimerUnEmployeById(id).subscribe(
      (res) => {
        console.log("Résultat de la suppression :", res);
        alert("suppression faite avec succés!!");
        window.location.reload();
      },
      (error) => {
        console.error("Erreur lors de la suppression :", error);
      }
    );
    }
   
   
  
  

 
  }


