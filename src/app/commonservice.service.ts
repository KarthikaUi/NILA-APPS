import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  APIURL = 'http://localhost:3000/chartdata';

  constructor(private _httpclient:HttpClient) { 


  }
  showdata(){
    return this._httpclient.get(this.APIURL);
  }
}

