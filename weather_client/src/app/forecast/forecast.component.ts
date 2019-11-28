import { Component, OnInit, Input} from '@angular/core';
import { SelectService, Day } from '../select/select.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.less'],
  providers: [DatePipe, SelectService]
})
export class ForecastComponent {

  @Input()
  city: any;

}
