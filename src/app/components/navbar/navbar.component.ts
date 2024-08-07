import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDropdownOpen = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  goToProfile() {
    this.isDropdownOpen = false;
  }

  goToSettings() {
    this.isDropdownOpen = false;
  }


}
