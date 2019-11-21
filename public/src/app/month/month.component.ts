import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  
  calendarPlugins = [dayGridPlugin];
  events:[];
  // events=[{title: '3 ppl', date: '2019-11-21'},{title: '2 ppl', date: '2019-11-22'}]
  id: Number;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.id = data['id'];
      console.log("This id is" + this.id);
    })
    this.getEvents(this.id);
  }

    getEvents(num: Number) {
    let observable = this._httpService.getHouse({ data: num });
    observable.subscribe(data => {
      if(data['name']=="CastError"){
        console.log("got here");
        this.reRoute();;
      }else{
      console.log(data);
      console.log("got house");
      this.events = data.events;
      console.log(this.events);
      }
    })
  }
  reRoute(){
    this._router.navigate(['/']);
  }

}
