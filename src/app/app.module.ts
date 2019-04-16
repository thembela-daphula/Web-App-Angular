import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire'
import { AngularFireAuthModule } from "@angular/fire/auth"
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SkillsComponent } from './skills/skills.component';
import { MemberComponent } from './member/member.component';
import { AddComponent } from './add/add.component';
import { SkillsDetailsComponent } from './skills-details/skills-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    CreateProjectComponent,
    HomeComponent,
    LeaveComponent,
    ListComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent,
    ProjectComponent,
    ProjectListComponent,
    SkillsComponent,
    MemberComponent,
    AddComponent,
    SkillsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
