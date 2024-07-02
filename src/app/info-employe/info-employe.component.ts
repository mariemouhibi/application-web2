import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-info-employe',
  templateUrl: './info-employe.component.html',
  styleUrls: ['./info-employe.component.css']
})
export class InfoEmployeComponent implements OnInit {
infoTab:any;
userEmail:any;
m:any;
id:any
 data: any={}
  constructor(private employeService : EmployeService,
    private router :Router,  private tokenStorage:TokenStorageService) { }

  ngOnInit() {

console.log(this.tokenStorage.getUser());  
  this. userEmail = this.tokenStorage.getUser().email;
    
    this.employeService.getEmployeeByEmail(this.userEmail).subscribe((res=>{
      this.infoTab=res
      console.log(this.infoTab);
    }));
  }
  goToEdit(email){
  this.router.navigate(['dashboardemploye/infoemploye/modifer/' + email]);

}}