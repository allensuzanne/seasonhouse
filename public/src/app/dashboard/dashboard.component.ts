import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { asRoughDays } from '@fullcalendar/core/datelib/duration';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id: Number;
  info: any;
  house: {};
  events= [];
  lat=0;
  long=0;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
//GET THE ID OF THE HOUSE, AND CALL THE GETHOUSE METHOD
    this.route.params.subscribe(data=>{
      this.id = data['id'];
      console.log("This id is " + this.id);
    })
    this.getHouse(this.id);
    this.getLatLong(); //for testing purposes, we can put in an address here 
    this.events = this.house.events;
  }


//GETTING THE HOUSE
  getHouse(houseId: Number){
    let observable = this._httpService.getHouse({data: houseId});
    observable.subscribe(data =>{
      if(data['name']=="CastError"){
        console.log("You got an error searching for the house");
      }else{
        console.log(data);
        console.log("You got a house");
        this.house = data;
        this.getLatLong(this.house.address)
      }
    })
  }

//GETTING THE LATLONG
  getLatLong(address: String){
    console.log("This is the address it's searching for" + address);
    let observable = this._httpService.getLatLong(address);
    observable.subscribe(data =>{
      if(data['name']=="CastError"){
        console.log("You got an error getting the latlong");
      }else{
        console.log(data);
        console.log("You got the latlong");
        this.lat = data.results[0].location.lat; 
        this.long = data.results[0].location.lng; 
        console.log(this.lat);
        console.log(this.long);
        this.getInfo(this.lat, this.long);
      }
    })
  }

//GETTING THE WEATHER WITH THE LATLONG
  getInfo(lat, long){
    var observable=this._httpService.getInfo(lat, long);
    observable.subscribe(data=>{
      console.log("got the new weather info")
      console.log(data);
      this.info = data;
    })
  }

  
}
