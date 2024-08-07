import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market-service/market.service';
import { HttpClient } from '@angular/common/http';
import { BundleModalService } from 'src/app/services/bundle-modal-service/bundle-modal.service';
import { BuyBundleService } from 'src/app/services/buy-bundle-service/buy-bundle.service';
import { LoginService } from 'src/app/services/login-service/login.service';

interface userType {
  userId: Number,
  userName: String,
  name: String,
  email: String,
  roleName: String
}

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
  user: any;


  constructor(private marketService: MarketService, private bundleService: BundleModalService, private buyBundleService: BuyBundleService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.marketService.getBundles().subscribe((data: any[]) => {
      this.bundles = data;
    });
  }

  buyBundle(bundleId: Number): void{

    this.user = this.loginService.getUsername();

    if(this.user != undefined){
      this.buyBundleService.buyBundle(this.user, bundleId).subscribe((data: any[]) => {
      })
    }


  }



  openModal(bundleId: Number): void {
    this.isModalVisible = true;

    this.bundleService.getCoursesByBundleId(bundleId).subscribe((data: any) => {
      this.selectedBundleCourses = data;
    })
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedBundleCourses = [];
  }


}
