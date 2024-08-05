import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  onSubmit(){

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if(username != null && password != null){
      this.loginService.login(username, password).subscribe(
        response => {
          console.log("login data: ", response)
          this.router.navigate(['/market'])
        },
        error => {
          console.log("Error: ",error)
        }
      );
    }

  }

}