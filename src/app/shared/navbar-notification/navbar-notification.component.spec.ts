import { TestBed, inject } from '@angular/core/testing';

import { NavbarNotificationComponent } from './navbar-notification.component';

describe('a navbar-notification component', () => {
	let component: NavbarNotificationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NavbarNotificationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NavbarNotificationComponent], (NavbarNotificationComponent) => {
		component = NavbarNotificationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});