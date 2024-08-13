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

  handleProgress(bundleId: Number, totalLessonNumber: Number, processStatus: any){

    if(processStatus != 'NOT'){
      this.isModalVisible = !this.isModalVisible;
    }else{
      this.createProgressService.createProgress(bundleId, totalLessonNumber).subscribe(
        response => {
          console.log('Progress created successfully:', response);
          this.router.navigate(['/calendar']);
  
        },
        error => {
          console.error('Error creating progress:', error);
          this.router.navigate(['/calendar']);

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
