import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { TeamComponent } from './components/team/team.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';

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
