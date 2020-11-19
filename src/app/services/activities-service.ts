import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHandler, HttpXhrBackend, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActivities, IProjectStatus, ITicket, IToDo } from '../models/activities';
import { api } from '../models/config';

const thisurl = `${api}/sales`;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ActivitiesService {
  constructor(private http:HttpClient) {
  }

  private toDoSource = new BehaviorSubject(null);
  public onReceivingToDoResult():Observable<IToDo[]> {
    return this.toDoSource;
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

  public getToDos() {
    this.http.get<IToDo[]>(`/assets/data/todos.json`,httpOptions)
    .subscribe(result => {
      this.toDoSource.next(result);
    });
  }

}

