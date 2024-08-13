import { Component, OnInit } from '@angular/core';
import { GetAllProgressesService } from 'src/app/services/get-all-progresses-service/get-all-progresses.service';
import { WithoutPurchaseService } from 'src/app/services/without-purchase-service/without-purchase.service';

interface Progress {
  name: string;
  bundleName?: string;
  remainingCourseNumber?: number;
}

interface Users {
  userName: string;
  name: string;
  email: string;
}


@Component({
  selector: 'app-users-bundles-page',
  templateUrl: './users-bundles-page.component.html',
  styleUrls: ['./users-bundles-page.component.css']
})
export class UsersBundlesPageComponent implements OnInit {

  selectedTab: 'remaining' | 'noPurchase' = 'remaining';
  progresses: Progress[] = [];
  users: Users[] = [];

  constructor(
    private remainingCoursesService: GetAllProgressesService,
    private noPurchaseUsersService: WithoutPurchaseService
  ) { }

  ngOnInit(): void {
    this.showRemainingCourses();
  }

  showRemainingCourses(): void {
    this.selectedTab = 'remaining';
    this.remainingCoursesService.getProgressActive().subscribe(
      response => {
        this.progresses = response;
      }
    );
  }

  showNoPurchaseUsers(): void {
    this.selectedTab = 'noPurchase';
    this.noPurchaseUsersService.getUsersDontHaveBundle().subscribe(
      response => {
        this.users = response;
      }
    );
  }

}
