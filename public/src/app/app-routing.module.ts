import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MonthComponent } from './month/month.component';
import { WeekComponent } from './week/week.component';
import { ChoresComponent } from './chores/chores.component';
import { ImguploadComponent } from './imgupload/imgupload.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'login',component: LoginComponent},
  {path: 'dashboard/:id',component: DashboardComponent},
  {path: 'messaging/:id',component: MessagingComponent},
  {path: 'calendar/month/:id',component: MonthComponent},
  {path: 'calendar/week/:id',component: WeekComponent},
  {path: 'chores/:id',component: ChoresComponent},
  {path: 'imgupload',component: ImguploadComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
