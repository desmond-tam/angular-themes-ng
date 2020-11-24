import { Observable, Subscriber } from 'rxjs';
import { HttpClient, HttpHandler, HttpXhrBackend, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user';



const thisurl = 'http://localhost:3200/api/users';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
  http:HttpClient;
  constructor(private _http:HttpClient) {
    this.http = _http;
  }

  public getUsers(): Observable<IUser[]> {
    return new Observable(subscriber => {
      this.http.get<IUser[]>('assets/data/users.json',httpOptions)
        .subscribe((result:IUser[]) => {
          subscriber.next(result);
          subscriber.complete();
      });
    });
  }
}

