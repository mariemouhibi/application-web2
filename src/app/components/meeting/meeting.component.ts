import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetService } from 'src/app/services/meet.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  meetTab:any;
  m:any;
  constructor( private meetService:MeetService,private router: Router) { }

  ngOnInit() {
    this.meetService.recupererAllMeets().subscribe((res=>{
      this.meetTab=res;
    }))
  }
  onAddMeet() {
    this.router.navigate(['/dashboardemploye/meet/addMeet']);
}
}
