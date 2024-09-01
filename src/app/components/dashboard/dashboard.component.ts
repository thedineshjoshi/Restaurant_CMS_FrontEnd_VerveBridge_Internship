import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _authservice:AuthService,private _route:Router) {}

  ngOnInit(): void {
    this.setActiveLink();
  }

  setActiveLink() {
    const navLinks = document.querySelectorAll('.sidebar-nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }

  logout()
  {
    this._authservice.logout();
    this._route.navigateByUrl('')
  }
}
