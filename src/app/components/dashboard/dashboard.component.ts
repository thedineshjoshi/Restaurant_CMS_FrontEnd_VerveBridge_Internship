import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone:true,
  imports:[
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class DashboardComponent implements OnInit {
  username:string="";
  constructor(private _authservice:AuthService,private _route:Router) {}

  ngOnInit(): void {
    this.username=this._authservice.decodeToken().name;
    console.log(this.username);
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
