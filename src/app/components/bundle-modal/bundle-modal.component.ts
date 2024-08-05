import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BundleModalService } from 'src/app/services/bundle-modal-service/bundle-modal.service';

@Component({
  selector: 'app-bundle-modal',
  templateUrl: './bundle-modal.component.html',
  styleUrls: ['./bundle-modal.component.css']
})
export class BundleModalComponent implements OnInit {

  constructor(private bundleService: BundleModalService) { }

  ngOnInit(): void {
  }


  @Input() isVisible: boolean = false;
  @Input() courses: any;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  /*getCoursesByBundleId(bundleId: Number): void {
    console.log("bundle numarası: ", bundleId);
    this.bundleService.getCoursesByBundleId(bundleId).subscribe((data: any[]) => {
      this.courses = data;
      console.log(data);
    })
  }*/



}
