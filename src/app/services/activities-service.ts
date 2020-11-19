import { Observable, Subscriber } from 'rxjs';
import { HttpClient, HttpHandler, HttpXhrBackend, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActivities, IProjectStatus, ITicket } from '../models/activities';
import { api } from '../models/config';

const thisurl = `${api}/sales`;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ActivitiesService {
  http:HttpClient;
  constructor(private _http:HttpClient) {
    this.http = _http;
  }

  public getActivities(): Observable<IActivities> {
    return new Observable(subscriber => {
      this.http.get<IActivities>('/assets/data/sales.json',httpOptions)
        .subscribe((result:IActivities) => {
          subscriber.next(result);
          subscriber.complete();
      });
    });
  }

  public getRecentTickets(): Observable<ITicket[]> {
    return new Observable(subscriber => {
      this.http.get<ITicket[]>(`/assets/data/tickets.json`,httpOptions)
        .subscribe((result:ITicket[]) => {
          subscriber.next(result);
          subscriber.complete();
        });
    })
  }

  public getProjectStatus() : Observable<IProjectStatus[]> {
    return new Observable(subscriber => {
      this.http.get<IProjectStatus[]>(`/assets/data/projects.json`,httpOptions)
      .subscribe((result:IProjectStatus[]) => {
        subscriber.next(result);
        subscriber.complete();
      });
    })
  }
}

