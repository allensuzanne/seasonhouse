import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  // getHouses(){
  //   return this._http.get('/api/read');
  // }
  
  // createNewHouse(newHouse){
  //   return this._http.post('/api/new', newHouse);
  // }

  // deleteHouse(num){
  //   return this._http.delete('/api/delete/'+num.data, num);
  // }

  // getEditedHouse(num){
  //   return this._http.get('/api/read/'+num.data, num);
  // }

  // editHouse(editedHouse){
  //   return this._http.put('/api/edit/'+editedHouse._id, editedHouse);
  // }
}
