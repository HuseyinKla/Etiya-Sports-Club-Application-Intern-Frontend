import { Component, OnInit } from '@angular/core';
import { GetAllLogsService } from 'src/app/services/get-all-logs-service/get-all-logs.service';


interface logs {
  username: String,
  logDate: Date,
  action: String
}


@Component({
  selector: 'app-all-logs-page',
  templateUrl: './all-logs-page.component.html',
  styleUrls: ['./all-logs-page.component.css']
})
export class AllLogsPageComponent implements OnInit {

  logs: logs[] = [];

  constructor(private getAllLogsService: GetAllLogsService) { }

  ngOnInit(): void {
    const logs = this.getAllLogsService.getLogs().subscribe(
      response => {
        this.logs = response;
      }
    )
  }
}
