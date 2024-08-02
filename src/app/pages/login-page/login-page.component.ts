import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth-service.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  onSubmit(){
    console.log('Username: ',this.loginForm.value.username)
    console.log('Password: ',this.loginForm.value.password)

    const username = this.loginForm.value.username;

    if(username != null){
      this.authService.login(username).subscribe(
        response => {
          console.log("login data: ", response)
        },
        error => {
          console.log("Error: ",error)
        }
      );
    }

  }


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

}
