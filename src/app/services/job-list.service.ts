import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JobListService {

  constructor(private http: HttpClient) { }

  public getJobList(): Observable<any> {
    return this.http.get("assets/data/jobs.json")
  }

  public getFoodList(): Observable<any> {
    return this.http.get("assets/data/food.json")
  }
}
