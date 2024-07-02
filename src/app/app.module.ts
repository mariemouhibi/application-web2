import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule,} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddjobComponent } from './components/addjob/addjob.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ServicesComponent } from './services/services.component';
import { PipesComponent } from './pipes/pipes.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { InterceptorService } from './services/auth-interceptor.service';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { AddemployeComponent } from './components/addemploye/addemploye.component';
import { EditEmployeComponent } from './components/edit-employe/edit-employe.component';
import { CongetableComponent } from './components/congetable/congetable.component';
import { CandidattableComponent } from './components/candidat-table/candidattable.component';
import { EntretienTableComponent } from './components/entretien-table/entretien-table.component';
import { MyfiltrePipe } from './pipes/myfiltre.pipe';
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
import { AddJobComponent } from './components/add-job/add-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    SignupComponent,
    AddjobComponent,
    HomeComponent,
    LoginComponent,
    DashbordComponent,
    ServicesComponent,
    PipesComponent,
    EmployeesTableComponent,
    AddemployeComponent,
    EditEmployeComponent,
    CongetableComponent,
    CandidattableComponent,
    EntretienTableComponent,
    MyfiltrePipe,
    DashEmployeComponent,
    AddCongeComponent,
    InfoEmployeComponent,
    CandidatureComponent,
    ListepreselectonneeComponent,
    MeetingComponent,
    AddMeetComponent,
    AddInterviewComponent,
    ModifeInfoComponent,
    JobsTableComponent,
    AddJobComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
