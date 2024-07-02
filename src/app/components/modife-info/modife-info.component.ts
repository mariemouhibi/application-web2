import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-modife-info',
  templateUrl: './modife-info.component.html',
  styleUrls: ['./modife-info.component.css']
})
export class ModifeInfoComponent implements OnInit {
  modifieEmployeForm:FormGroup;
  modife:any;
  id:any
  email:any
  constructor(private employeService: EmployeService, private activitedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.email=this.activitedRouter.snapshot.paramMap.get("email"); 

    this.employeService.getEmployeeByEmail(this.email).subscribe((res=>{
      this.modife=res;
      console.log(this.modife);
    }));


}}
