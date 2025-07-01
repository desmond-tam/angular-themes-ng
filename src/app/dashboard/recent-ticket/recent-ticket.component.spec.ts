import { TestBed, inject } from '@angular/core/testing';

import { RecentTicketComponent } from './recent-ticket.component';

describe('a recent-ticket component', () => {
	let component: RecentTicketComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RecentTicketComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RecentTicketComponent], (RecentTicketComponent) => {
		component = RecentTicketComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});