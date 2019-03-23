import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:4200/assets/plansGadgetData.json";

  plansGadgetData()
  {
    return this.http.get(this.apiUrl).pipe(map((data)=>data));
  }
}
