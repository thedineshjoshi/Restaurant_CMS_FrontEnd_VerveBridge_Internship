import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/dashboard/about-us/about-us.component';
import { MenuComponent } from './components/dashboard/menu/menu.component';
import { ReservationsComponent } from './components/dashboard/reservations/reservations.component';
import { TeamComponent } from './components/dashboard/team/team.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'dashboard',component:DashboardComponent,pathMatch:'full',canActivate:[AuthguardService]},
  { path: 'about-us', component: AboutUsComponent,canActivate:[AuthguardService] },
  { path: 'menu', component: MenuComponent,canActivate:[AuthguardService] },
  { path: 'reservations', component: ReservationsComponent,canActivate:[AuthguardService] },
  { path: 'team', component: TeamComponent ,canActivate:[AuthguardService]},
  { path: '**', component: PageNotFoundComponent },
];
