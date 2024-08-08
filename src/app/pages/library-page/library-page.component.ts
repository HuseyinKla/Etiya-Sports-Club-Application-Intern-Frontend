import { Component, OnInit  } from '@angular/core';
import { Timestamp, count } from 'rxjs';
import { LoginService } from 'src/app/services/login-service/login.service';
import { UsersBundleService } from 'src/app/services/users-bundle-service/users-bundle.service';

enum ProcessStatus {
  NOT = 'NOT',
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED'
}

interface bundleType {
  bundleId: Number,
  bundleName: String,
  bundlePrice: Number,
  bundleDescription: String,
  totalLessonNumber: Number,
  purchaseDate: Timestamp<any>;
  processStatus: ProcessStatus
};


@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {

  username: any;
  myBundles: bundleType[] | undefined;
  isProgressInitButtonDisabled: boolean | undefined;

  constructor(private userbundleService: UsersBundleService, private loginService: LoginService) { }

  ngOnInit(): void {

    this.username = this.loginService.getUsername();

    if(this.username != undefined){
      this.userbundleService.getBundlesByUsername(this.username).subscribe((data: any[]) => {
        this.myBundles = data;
        const processingCount = this.myBundles?.filter(bundle => bundle.processStatus === ProcessStatus.PROCESSING).length || 0;

        console.log("Processing counter -> ", processingCount);
        if(processingCount == 0){
          this.isProgressInitButtonDisabled = false;
        }else{
          this.isProgressInitButtonDisabled = true;
        }
      });
    }
    
  }

}
