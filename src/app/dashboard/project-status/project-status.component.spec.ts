import { TestBed, inject } from '@angular/core/testing';

import { ProjectStatusComponent } from './project-status.component';

describe('a project-status component', () => {
	let component: ProjectStatusComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProjectStatusComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProjectStatusComponent], (ProjectStatusComponent) => {
		component = ProjectStatusComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});