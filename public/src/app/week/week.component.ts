import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}
