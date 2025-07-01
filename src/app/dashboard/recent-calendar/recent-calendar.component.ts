import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';

@Component({
	selector: 'app-recent-calendar',
	templateUrl: 'recent-calendar.component.html'
})

export class RecentCalendarComponent implements OnInit {
  value: Date = new Date();
	ngOnInit() { }
}
