import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SelectService, City, Day } from './select.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  providers: [SelectService]
})
export class SelectComponent implements OnInit {

  cityControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);

  serviceForSelect: any;

  cities: City[] = [];
  city: Day[] = [];
  dt_txt: Date;

  constructor(public selectService: SelectService) {
    const self = this;
    self.serviceForSelect = self.selectService;

    this.selectService.getData().subscribe(data => {
      console.log(data);
      return this.cities = data["cities"];
    });

    this.selectService.getDataByCity('london').subscribe(data => {
      console.log(data);
      return this.city = data["city"];
    });
   }

  public chooseCity(selectedValue:any) {
    console.log('cityWeather', selectedValue.value);
    this.selectService.getDataByCity(selectedValue.value).subscribe(data => {
      console.log(data);
      return this.city = data["city"];
    });
  }

  ngOnInit() {

  }

}
