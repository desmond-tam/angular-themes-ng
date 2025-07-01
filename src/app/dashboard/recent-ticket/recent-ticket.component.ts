import { Component, OnInit } from '@angular/core';
import { ITicket, Ticket } from 'src/app/models/activities';
import { ActivitiesService } from '../../services/activities-service';

@Component({
	selector: 'app-recent-ticket',
	templateUrl: 'recent-ticket.component.html'
})

export class RecentTicketComponent implements OnInit {
  tickets:ITicket[];
  constructor(private service:ActivitiesService) {

  }
	ngOnInit() {
    this.service.getRecentTickets().subscribe(response => {
      this.tickets = response.map(item => {
        return Ticket(item);
      }).sort((a:any,b:any) => {
        return a.lastUpdate > b.lastUpdate ?  -1 : 1
      });
      console.log(this.tickets);
    })
  }
}
