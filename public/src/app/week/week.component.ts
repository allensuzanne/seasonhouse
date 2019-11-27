import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];
  events:[];
  id: Number;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
         //GET THE ID FROM THE ROUTE, AND CALL THE GETEVENTS METHOD
    this.route.params.subscribe(data=>{
      this.id = data['id'];
      console.log("This id is" + this.id);
    })
    this.getEvents(this.id);
  }
  //GETTING THE SPECIFIC EVENTS
    getEvents(num: Number) {
    let observable = this._httpService.getHouse({ data: num });
    observable.subscribe(data => {
      if(data['name']=="CastError"){
        console.log("You got an error getting the house");
        this.reRoute();;
      }else{
        console.log(data);
        console.log("You got the house");
        this.events = data.events;
        console.log(this.events);
      }
    })
  }
  
  reRoute(){
    this._router.navigate(['/']);
  }

}
