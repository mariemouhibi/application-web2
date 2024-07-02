import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetService } from 'src/app/services/meet.service';

@Component({
  selector: 'app-add-meet',
  templateUrl: './add-meet.component.html',
  styleUrls: ['./add-meet.component.css']
})
export class AddMeetComponent implements OnInit {
  addmeetForm:FormGroup
  meet:any={}
  constructor(private meetService:MeetService) { }

  ngOnInit() {
  }
  addMeet(){
    this.meetService.ajouterUnMeet(this.meet).subscribe((res=>{
      console.log("test",res)
      alert("votre réunion a ete bien enregistrée");
    }))
  }

}
