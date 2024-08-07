import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login.service';
import { UsersBundleService } from 'src/app/services/users-bundle-service/users-bundle.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {


  username: any;
  myBundles: any[] | undefined;

  constructor(private userbundleService: UsersBundleService, private loginService: LoginService) { }

  ngOnInit(): void {

    this.username = this.loginService.getUsername();

    if(this.username != undefined){
      this.userbundleService.getBundlesByUsername(this.username).subscribe((data: any[]) => {
        this.myBundles = data;
      });
    }

  }

}
