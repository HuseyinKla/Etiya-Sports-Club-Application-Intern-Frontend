import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Course {
  courseName: string;
  courseDescription: string;
}

interface Bundle {
  bundleName: string;
  bundleDescription: string;
  bundlePrice: string;
}

@Component({
  selector: 'app-create-bundle-page',
  templateUrl: './create-bundle-page.component.html',
  styleUrls: ['./create-bundle-page.component.css']
})
export class CreateBundlePageComponent {
  currentStep = 1;
  steps = [
    { label: 'Bundle Bilgileri' },
    ...Array(10).fill(0).map((_, i) => ({ label: `Kurs ${i + 1}` })),
    { label: 'Gözden Geçir ve Gönder' }
  ];

  bundle: Bundle = {
    bundleName: '',
    bundleDescription: '',
    bundlePrice: ''
  };

  courses: Course[] = Array(10).fill({ courseName: '', courseDescription: '' });
  course: Course = { courseName: '', courseDescription: '' };
  courseIndex: number = 0;

  nextStep() {
    if (this.isStepValid()) {
      if (this.currentStep < this.steps.length) {
        if (this.currentStep > 1 && this.currentStep <= 11) {
          this.courses[this.currentStep - 2] = { ...this.course };
          this.course = { courseName: '', courseDescription: '' };  // Kurs bilgilerini sıfırla
        }
        this.currentStep++;
      }
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      if (this.currentStep > 1 && this.currentStep <= 11) {
        this.course = { ...this.courses[this.currentStep - 2] };
      }
    }
  }

  convertToNumber(value: string): number {
    return parseFloat(value);
  }

  isStepValid(): boolean {
    if (this.currentStep === 1) {
      console.log("girilen bundle ismi: ",this.bundle.bundleName);
      console.log("girilen bundle açıklaması: ",this.bundle.bundleDescription);
      console.log("girilen bundle fiyatı: ",this.bundle.bundlePrice);
      return this.bundle.bundleName.trim() !== '' &&
             this.bundle.bundleDescription.trim() !== '' &&
             this.convertToNumber(this.bundle.bundlePrice) > 0;
    }else if (this.currentStep > 1 && this.currentStep <= 11) {
      const courseIndex = this.currentStep - 2;
      console.log("girilen kurs ismi: ", this.courses[courseIndex].courseName);
      console.log("girilen kurs açıklaması: ", this.courses[courseIndex].courseDescription);
      return this.courses[courseIndex].courseName.trim() !== '' &&
             this.courses[courseIndex].courseDescription.trim() !== '';
    }else if (this.currentStep === this.steps.length) {
      // Adım 12: Gönder ve Gözden Geçir
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
      alert('Fiyat sıfırdan büyük ve geçerli bir sayı olmalıdır.');
      return;
    }

    // Diğer form gönderme işlemleri...
    console.log('Form Submitted:', this.bundle, this.courses);
  }
}
