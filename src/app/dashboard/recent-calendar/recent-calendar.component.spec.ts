import { TestBed, inject } from '@angular/core/testing';

import { RecentCalendarComponent } from './recent-calendar.component';

describe('a recent-calendar component', () => {
	let component: RecentCalendarComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RecentCalendarComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RecentCalendarComponent], (RecentCalendarComponent) => {
		component = RecentCalendarComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});