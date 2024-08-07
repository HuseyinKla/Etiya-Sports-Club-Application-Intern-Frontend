import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events: any = [
    { title: 'event 1', date: '2024-08-10' },
    { title: 'event 2', date: '2024-08-11' },
    { title: "deneme",  start: '2024-08-13', end: '2024-08-18'},
    { title: "deneme",  start: '2024-09-01', end: '2024-09-08'},
    { title: "deneme",  start: '2024-07-29', end: '2024-08-01'}
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    eventClick: (arg: any) => this.handleDateClick(arg),
    firstDay: 1,
    events: this.events,
    
  };
  eventsPromise: Promise<EventInput[]> | undefined;

  handleDateClick(arg: { date: string; }) {
    alert('date click! ' + arg.date);
  }

}
