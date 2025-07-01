import { Component, OnInit } from '@angular/core';
import { IProjectStatus, ProjectStatus } from 'src/app/models/activities';
import { ActivitiesService } from 'src/app/services/activities-service';

@Component({
	selector: 'app-project-status',
	templateUrl: 'project-status.component.html'
})

export class ProjectStatusComponent implements OnInit {
  projects:IProjectStatus[];
  constructor(private service:ActivitiesService) {

  }

	ngOnInit() {
      this.service.getProjectStatus()
        .subscribe(response => {
          this.projects = response.map(x => {
              return ProjectStatus(x);
          });
          console.log(this.projects);
        })
   }
}
