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
          this.loginService.createLog("log").subscribe(
            logResponse => {
            }
          )
          if(response.roleName === 'member'){
            this.router.navigate(['/market'])
          }else if(response.roleName === 'admin'){
            this.router.navigate(['/admin-bundles'])
          }
        },
        error => {
          console.log("Error: ",error)
        }
      );
    }

  }

  navigateToRegister(){
    this.router.navigate(['/register'])
  }


}