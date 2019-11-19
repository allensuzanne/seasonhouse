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


const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'login',component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'messaging',component: MessagingComponent},
  {path: 'calendar/month',component: MonthComponent},
  {path: 'calendar/week',component: WeekComponent},
  {path: 'chores',component: ChoresComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
