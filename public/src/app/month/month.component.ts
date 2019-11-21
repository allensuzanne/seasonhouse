import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  
  calendarPlugins = [dayGridPlugin];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}
