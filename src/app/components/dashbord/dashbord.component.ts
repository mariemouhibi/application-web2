import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  showList: boolean =false;

  toggleList(): void {
      this.showList = true;
  }
  
  hideList(): void {
    this.showList = false;
}
  constructor(private router :Router) { }

  ngOnInit() {
  }
  goToList(){
this.router.navigate(["dashboard/candidat"]);
  }
}
