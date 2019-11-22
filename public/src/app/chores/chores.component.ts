import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-chores',
  templateUrl: './chores.component.html',
  styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {

  id: Number;
  house: {};
  chores: any;
  oneChore: any;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    //GET THE ID OF THE HOUSE, AND CALL THE GETHOUSE METHOD
    this.route.params.subscribe(data=>{
      this.id = data['id'];
      console.log("This id is" + this.id);
    })
    this.getHouse(this.id);
  }
//GETTING THE HOUSE
  getHouse(houseId: Number){
    let observable = this._httpService.getHouse({data: houseId});
    observable.subscribe(data =>{
      if(data['name']=="CastError"){
        console.log("got an error searching for the house");
      }else{
      console.log(data);
      console.log("got a house");
      this.house = data;
      this.chores = this.house.chores;
      }
    })
  }
  completeTask(choreId: Number){
    let observable = this._httpService.getChore({data: choreId});
    observable.subscribe(data =>{
      if(data['name']=="CastError"){
        console.log("got an error searching for the chore");
      }else{
        console.log(data);
        console.log("got a chore");
        this.oneChore = data;
        this.oneChore.status= true;
      }
    })
  }
}
