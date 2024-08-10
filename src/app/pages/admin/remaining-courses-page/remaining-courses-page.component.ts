import { Component, OnInit } from '@angular/core';
import { GetAllProgressesService } from 'src/app/services/get-all-progresses-service/get-all-progresses.service';


interface progresses{
  name: String,
  bundleName: String,
  remainingCourseNumber: number
}


@Component({
  selector: 'app-remaining-courses-page',
  templateUrl: './remaining-courses-page.component.html',
  styleUrls: ['./remaining-courses-page.component.css']
})
export class RemainingCoursesPageComponent implements OnInit {

  constructor(private allProgressService: GetAllProgressesService) { }
  progresses: progresses[] = [];

  ngOnInit(): void {
    this.allProgressService.getLogs().subscribe(
      response => {
        this.progresses = response
      } 
    )
  }

}
