import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToMainPage(): void {
    const role = this.loginService.getUserRole();

    if (role === 'admin') {
      this.router.navigate(['/admin-bundle']);
    } else if (role === 'member') {
      this.router.navigate(['/market']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
