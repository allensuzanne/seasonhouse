import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getHouses(){
    return this._http.get('/api/read');
  }
  
  createNewHouse(newHouse){
    return this._http.post('/api/new', newHouse);
  }

  // deleteHouse(num){
  //   return this._http.delete('/api/delete/'+num.data, num);
  // }

  getHouse(num){
    return this._http.get('/api/read/'+num.data, num);
  }

  getEvents(id){
    var house =  this._http.get('api/read/'+id.data, id);
    return house.events;
  }

  getInfo(lat, long){
    return this._http.get("https://api.weatherbit.io/v2.0/forecast/daily?key=58b38563970a40119a1a3d34ae8a27e1&units=I&days=5&lat="+lat+"&lon="+long);
    return this._http.get("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&appid=bf02996d9ac3116a3c130146b8d15b56&units=imperial&cnt=5");
  }

  getLatLong(address){
    return this._http.get("https://api.geocod.io/v1.4/geocode?q="+address+"&api_key=d34d937d9279dd59384d495dd93d53799398438")
  }

  // editHouse(editedHouse){
  //   return this._http.put('/api/edit/'+editedHouse._id, editedHouse);
  // }
}

//"