import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  invalidLogin: boolean = false;
  errorMessage: String = "Invalid credentials";

  constructor(
    private router: Router,
    private basicAuthService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    this.basicAuthService.authenticate(this.username, this.password).subscribe(
      (data) => {
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      (error) => {
        this.invalidLogin = true;
      }
    );
  }
}
