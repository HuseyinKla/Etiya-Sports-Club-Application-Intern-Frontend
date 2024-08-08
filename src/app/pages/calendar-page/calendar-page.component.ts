import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import { Timestamp } from 'rxjs';
import { LoginService } from 'src/app/services/login-service/login.service';
import { UsersBundleService } from 'src/app/services/users-bundle-service/users-bundle.service';

enum ProcessStatus {
  NOT = 'NOT',
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED'
}

interface bundleType {
  bundleId: Number,
  bundleName: string,
  bundlePrice: Number,
  bundleDescription: String,
  totalLessonNumber: number,
  purchaseDate: Timestamp<any>;
  processStatus: ProcessStatus
};

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit {

  username: any;
  myBundle: bundleType[] | undefined;
  events: EventInput[] = [];
  isModalVisible: boolean = false;
  modalTitle: string = '';
  modalDescription: string = '';
  modalRemainingDays: number = 0;

  constructor(private userBundleService: UsersBundleService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.username = this.loginService.getUsername();
    if(this.username != undefined){
      this.userBundleService.getBundlesByUsername(this.username).subscribe((data: any[]) => {
        this.myBundle = data.filter(bundle => bundle.processStatus === ProcessStatus.PROCESSING);
        this.myBundle.map(bundle => {
          this.addEvent(bundle);
        });
      });
    }
  }

  addEvent(bundle: bundleType) {
    const today = new Date();
    const startDate = today.toISOString().split('T')[0];
    var end = new Date(today);
    end.setDate(today.getDate() + bundle.totalLessonNumber);
    const endDate = end.toISOString().split('T')[0];

    const event: EventInput = {
      title: bundle.bundleName,
      start: startDate,
      end: endDate,
      backgroundColor: '#242444',
      borderColor: '#f28324',
      textColor: '#f28324',
      extendedProps: {
        description: bundle.bundleDescription,
        remainingDays: bundle.totalLessonNumber,
      }
    };

    this.events.push(event);
    this.calendarOptions.events = [...this.events];
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    eventClick: (arg: any) => this.handleDateClick(arg.event),
    firstDay: 1,
    events: this.events,
  };

  handleDateClick(event: any) {
    this.modalTitle = event.title;
    this.modalDescription = event.extendedProps.description;
    this.modalRemainingDays = event.extendedProps.remainingDays;
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }
}
