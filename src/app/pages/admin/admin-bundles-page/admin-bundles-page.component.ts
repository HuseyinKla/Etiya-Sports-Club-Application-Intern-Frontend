import { Component, OnInit } from '@angular/core';
import { GetAdminBundlesService } from 'src/app/services/get-admin-bundles/get-admin-bundles.service';

interface Course {
  courseName: string;
  courseDescription: string;
}

interface Bundle {
  bundleName: string;
  bundleDescription: string;
  bundlePrice: number;
  totalLessonNumber: number;
  courses: Course[];
}

@Component({
  selector: 'app-admin-bundles-page',
  templateUrl: './admin-bundles-page.component.html',
  styleUrls: ['./admin-bundles-page.component.css']
})
export class AdminBundlesPageComponent implements OnInit {

  bundles: Bundle[] = [];
  openedBundleIndex: number | null = null;

  constructor(private getAdminBundlesService: GetAdminBundlesService) { }

  ngOnInit(): void {
    this.getAdminBundlesService.getAllBundles().subscribe(
      response => {
        this.bundles = response;
      }
    )
  }

  toggleBundle(index: number): void {
    if (this.openedBundleIndex === index) {
      this.openedBundleIndex = null; // Close if the same bundle is clicked again
    } else {
      this.openedBundleIndex = index; // Open the new bundle
    }
  }
}
