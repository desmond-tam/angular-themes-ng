import { Component, OnInit } from '@angular/core';
import { INotification } from 'src/app/models/activities';
import { ActivitiesService } from 'src/app/services/activities-service';

@Component({
	selector: 'app-navbar-notification',
	templateUrl: 'navbar-notification.component.html'
})

export class NavbarNotificationComponent implements OnInit {
  notifications:INotification[];
  constructor(private service:ActivitiesService) {

  }

	ngOnInit() {
      this.service.getNotifications()
        .subscribe(result => {
          this.notifications = result;
        })
   }
}
