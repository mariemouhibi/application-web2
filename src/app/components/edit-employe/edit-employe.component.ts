import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {
edit:any={};
id:any;
editEmployeForm:FormGroup
  constructor( private activitedRouter : ActivatedRoute,
    private employeService : EmployeService, private router:Router,
  private tokenStorage: TokenStorageService) {
      
     }

  ngOnInit() {
     this.id=this.activitedRouter.snapshot.paramMap.get("id"); 
    this.employeService.getEmployeById(this.id).subscribe((res=>{
      this.edit=res;
      console.log(this.edit);

    }));

    }
   
  
  
  editemployer(id){
    
  this.employeService.getEmployeById(this.id).subscribe((res)=>{
    console.log("here res after edit",res);
    
});  alert("modification faite avec sucées!!"); }


}