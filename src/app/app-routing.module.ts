import { NgModule } from '@angular/core';
import { RouterModule,Routes  } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { BlogComponent } from './components/blog/blog.component';
import { AddjobComponent } from './components/addjob/addjob.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { AddemployeComponent } from './components/addemploye/addemploye.component';
import { EditEmployeComponent } from './components/edit-employe/edit-employe.component';
import { CongetableComponent } from './components/congetable/congetable.component';
import { CandidattableComponent } from './components/candidat-table/candidattable.component';
import { EntretienTableComponent } from './components/entretien-table/entretien-table.component';
import { DashEmployeComponent } from './dash-employe/dash-employe.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { InfoEmployeComponent } from './info-employe/info-employe.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { ListepreselectonneeComponent } from './components/listepreselectonnee/listepreselectonnee.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { AddMeetComponent } from './components/add-meet/add-meet.component';
import { AddInterviewComponent } from './components/add-interview/add-interview.component';
import { ModifeInfoComponent } from './components/modife-info/modife-info.component';
import { JobsTableComponent } from './components/jobs-table/jobs-table.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  { path:"signup", component:SignupComponent},
  {path:"blog", component:JobsTableComponent},
  {path:"dashbord", component:DashbordComponent},
  {path:"login", component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:"dashboard/employees",component:EmployeesTableComponent},
  {path:"dashboard/addemploye", component:AddemployeComponent},
  {path:"dashboard/conge", component:CongetableComponent},
  {path:"dashboard/jobstable", component:AddjobComponent},

  {path:"dashboard/candidat",component:CandidattableComponent},
  {path:"dashboard/entretien",component:EntretienTableComponent},
  {path:"dashboardemploye",component:DashEmployeComponent},
  {path:"dashboardemploye/addconge",component:AddCongeComponent},
  {path:"dashboardemploye/infoemploye",component:InfoEmployeComponent},
  {path:"editemploye/:id", component:EditEmployeComponent},
  {path:"blog/candidature",component:CandidatureComponent},
  {path:"dashboardemploye/meet",component:MeetingComponent},
  {path:"dashboardemploye/meet/addMeet",component:AddMeetComponent},
{path:"dashboard/entretien/addentretien",component:AddInterviewComponent},
{path:"dashboardemploye/infoemploye/modifer/:email",component:ModifeInfoComponent},

  {path:"dashboard/candidat/listecandidatpreselectionee/:id",component:ListepreselectonneeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
