import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruteurService } from 'src/app/services/recruteur.service';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.css']
})
export class JobsTableComponent implements OnInit {
  jobsTab:any;
  m:any;
  constructor(private recruteurService:RecruteurService,private router:Router) { }

  ngOnInit() {
this.recruteurService.recupererAllOffres().subscribe((res=>{
  this.jobsTab=res
}))
  }
  postuler(){
    this.router.navigate(["blog/candidature"]);
  }
}
