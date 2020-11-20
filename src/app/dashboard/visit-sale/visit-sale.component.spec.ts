import { TestBed, inject } from '@angular/core/testing';

import { VisitSaleComponent } from './visit-sale.component';

describe('a visit-sale component', () => {
	let component: VisitSaleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VisitSaleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VisitSaleComponent], (VisitSaleComponent) => {
		component = VisitSaleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});