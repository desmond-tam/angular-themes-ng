import { Component, OnInit } from '@angular/core';
import { IMessage, Message } from 'src/app/models/activities';
import { ActivitiesService } from 'src/app/services/activities-service';

@Component({
  selector: 'app-navbar-message',
  styleUrls: ['./navbar-message.component.css'],
	templateUrl: 'navbar-message.component.html'
})

export class NavbarMessageComponent implements OnInit {
  messages:IMessage[]=[];

  constructor(private service:ActivitiesService) {

  }
	ngOnInit() {
    this.service.getMessages()
    .subscribe(result => {
        this.messages = result.map((item:IMessage) => {
          return Message(item);
        });
    })
   }
}
