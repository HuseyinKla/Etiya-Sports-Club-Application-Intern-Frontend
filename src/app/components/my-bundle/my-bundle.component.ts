import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProgressService } from 'src/app/services/create-progress-service/create-progress.service';

@Component({
  selector: 'app-my-bundle',
  templateUrl: './my-bundle.component.html',
  styleUrls: ['./my-bundle.component.css']
})
export class MyBundleComponent implements OnInit {

  constructor(private createProgressService: CreateProgressService, private router: Router) { }
  isModalVisible = false;


  @Input() myBundles: any;
  @Input() isProgressInitButtonDisabled: boolean | undefined;


  ngOnInit(): void {
  }

  createProgress(bundleId: number, totalLessonNumber: number, processStatus: any){

    if(processStatus != 'NOT'){
      console.log("YANLIŞ");
      this.isModalVisible = !this.isModalVisible;

    }else{
      this.createProgressService.createProgress(bundleId, totalLessonNumber).subscribe(
        response => {
          console.log('Progress created successfully:', response);
          this.router.navigate(['/calendar']);
  
        },
        error => {
          console.error('Error creating progress:', error);
        }
      )
    }
  }


  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }

}
