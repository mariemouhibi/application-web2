import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-dash-employe',
  templateUrl: './dash-employe.component.html',
  styleUrls: ['./dash-employe.component.css']
})
export class DashEmployeComponent implements OnInit {
id:number;
  constructor(private employerService:EmployeService) { }

  ngOnInit() {
  }
  getEmployerById(){
    this.employerService.getEmployeById(this.id);
  }
}
