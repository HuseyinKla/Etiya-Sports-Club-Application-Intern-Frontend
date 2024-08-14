import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register-service/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  roleSelected: 'admin' | 'member' = 'member';
  constructor(private router: Router, private registerService: RegisterService) {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rolename: new FormControl('', ),
  });

  onSubmit(){
    if (this.registerForm.valid ) {
      const userData = {
        ...this.registerForm.value,
        rolename: this.roleSelected
      };

      console.log("User Data Submitted: ", userData);

      this.registerService.registerUser(userData).subscribe(
        response => {
          this.router.navigate(['/login']);
        }
      )

    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  selectRole(role: 'admin' | 'member') {
    this.roleSelected = role;
    this.registerForm.patchValue({ rolename: role });
  }
}
