import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Etiya-Sports-Club';


  constructor(private router: Router) {  }

  showHeaderFooter(): boolean {
    return !this.router.url.startsWith('/login') && this.router.url !== "/403";
  }
}
