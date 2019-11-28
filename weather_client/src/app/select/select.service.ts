import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subject, Observable } from 'rxjs';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

export class City {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
export class Day {
  public icon: string;
  public temp: string;
  public date: string;

  constructor(icon: string, temp: string, date: string) {
    this.icon = icon;
    this.temp = temp;
    this.date = date;
  }
}


@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http: HttpClient) { }

  // city: string = City.name;

  getData():Observable<any> {
    return this.http.get<string>('http://localhost:4000/cities');
  }
  getDataByCity(city):Observable<any> {
    return this.http.get<string>('http://localhost:4000/weather/'+ city);
  }
}
