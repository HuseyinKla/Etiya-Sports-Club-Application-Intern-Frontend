import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateBundleService } from 'src/app/services/create-bundle-service/create-bundle.service';

interface Course {
  courseName: string;
  courseDescription: string;
}

interface Bundle {
  bundleName: string;
  bundleDescription: string;
  bundlePrice: string;
  totalLesson: string;
}

@Component({
  selector: 'app-create-bundle-page',
  templateUrl: './create-bundle-page.component.html',
  styleUrls: ['./create-bundle-page.component.css']
})
export class CreateBundlePageComponent {
  currentStep = 1;
  steps = [
    { label: 'Bundle Info' },
    ...Array(10).fill(0).map((_, i) => ({ label: `Course ${i + 1}` })),
    { label: 'Review and Submit' }
  ];

  bundle: Bundle = {
    bundleName: '',
    bundleDescription: '',
    bundlePrice: '',
    totalLesson: ''
  };

  courses: Course[] = Array(10).fill({ courseName: '', courseDescription: '' });

  constructor(private creteBundleService: CreateBundleService, private router: Router){ }



  nextStep() {
    if (this.isStepValid()) {
      if (this.currentStep < this.steps.length) {
        if (this.currentStep > 1 && this.currentStep <= 11) {
          const courseIndex = this.currentStep - 2;
          this.courses[courseIndex] = { ...this.courses[courseIndex] };
          if(this.currentStep != 11){
            this.courses[courseIndex + 1] = { courseName: "", courseDescription: "" }; 
          }

        }
        this.currentStep++;
      }
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  convertToNumber(value: string): number {
    return parseFloat(value);
  }

  isStepValid(): boolean {
    if (this.currentStep === 1) {
      return this.bundle.bundleName.trim() !== '' &&
             this.bundle.bundleDescription.trim() !== '' &&
             this.convertToNumber(this.bundle.bundlePrice) > 0 &&
             this.convertToNumber(this.bundle.totalLesson) > 0;
    } else if (this.currentStep > 1 && this.currentStep <= 11) {
      const courseIndex = this.currentStep - 2;
      return this.courses[courseIndex].courseName.trim() !== '' &&
             this.courses[courseIndex].courseDescription.trim() !== '';
    } else if (this.currentStep === this.steps.length) {
      return this.bundle.bundleName.trim() !== '' &&
             this.bundle.bundleDescription.trim() !== '' &&
             this.convertToNumber(this.bundle.bundlePrice) > 0 &&
             this.courses.every(course => course.courseName.trim() !== '' && course.courseDescription.trim() !== '');
    }
    return true;
  }

  onSubmit() {
    const bundlePriceNumber = this.convertToNumber(this.bundle.bundlePrice);

    if (isNaN(bundlePriceNumber) || bundlePriceNumber <= 0) {
      alert('The price must be greater than zero and a valid number.');
      return;
    }
    this.creteBundleService.createBundle(this.bundle, this.courses).subscribe(
      response => {
        this.router.navigate(['/admin-bundles'])
      }
    )

  }




}
