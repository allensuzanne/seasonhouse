import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-chores',
  templateUrl: './chores.component.html',
  styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}
