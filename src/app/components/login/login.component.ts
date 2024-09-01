import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../Model/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class LoginComponent {
  constructor(private _authService:AuthService, private _router:Router,private formBuilder:FormBuilder){}
  loginDetails:Login = new Login();
  loginForm:any = FormGroup;
  submitted = false;

  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  message: string = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login()
  {
    this._authService.login(this.loginDetails).subscribe(
      res=>{
        let token = res.token;
        if(token)
        {
          window.localStorage.setItem("token",token);
          this.submitted = true;
          this._router.navigateByUrl("/dashboard");
        }
      },
      err=>{
        console.log(err);
      }
    )
  }

 
}
