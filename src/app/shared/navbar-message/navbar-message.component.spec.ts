import { TestBed, inject } from '@angular/core/testing';

import { NavbarMessageComponent } from './navbar-message.component';

describe('a navbar-message component', () => {
	let component: NavbarMessageComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NavbarMessageComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NavbarMessageComponent], (NavbarMessageComponent) => {
		component = NavbarMessageComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});