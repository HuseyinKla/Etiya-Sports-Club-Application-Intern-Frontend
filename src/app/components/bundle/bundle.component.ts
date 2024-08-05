import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market-service/market.service';
import { HttpClient } from '@angular/common/http';
import { BundleModalService } from 'src/app/services/bundle-modal-service/bundle-modal.service';



@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {

  bundles: any[] = [];
  selectedBundle: any;
  selectedBundleCourses: any;
  isModalVisible: boolean = false;

  constructor(private marketService: MarketService, private bundleService: BundleModalService) { }

  ngOnInit(): void {
    this.marketService.getBundles().subscribe((data: any[]) => {
      this.bundles = data;
    });
  }

  openModal(bundleId: Number): void {
    this.isModalVisible = true;

    this.bundleService.getCoursesByBundleId(bundleId).subscribe((data: any) => {
      this.selectedBundleCourses = data;
      console.log(data);
    })
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedBundleCourses = [];
  }


}
