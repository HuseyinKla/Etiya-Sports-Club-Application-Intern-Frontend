import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent implements OnInit {

  username: string | null = '';



  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.loginService.getUsername();
    if(this.username == null){
      this.router.navigate(['/login'])
    }
  }

}
