import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectUrl:string = 'http://localhost:3000'
  project : Project = 
  {
    projectName:null,
    check_in_role : null
  }


  constructor(private http:HttpClient) { }

private handleError(error: any) { 
  let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  return Observable.throw(errMsg);
}

public getProject(){
    return this.project;
  }

public getRoleName(){
    return this.http.get(this.projectUrl+"/getRoleName").pipe(
      map(data =>data),
      catchError(this.handleError)
    )
  }

public checkIn(projectCheckIn : Project) : Observable<Project>{
    return this.http.post<Project>(this.projectUrl+"/project/checkin",projectCheckIn,httpOptions).pipe(
      map(data =>data),
      catchError(this.handleError)
    )
  }
  
public checkOut(projectCheckIn : Project) : Observable<Project>{
    return this.http.post<Project>(this.projectUrl+"/project/checkout",projectCheckIn,httpOptions).pipe(
      map(data =>data),
      catchError(this.handleError)
    )
  }

public queryResource(projectCheckIn : Project) : Observable<Project>{
    return this.http.post<Project>(this.projectUrl+"/project/checkout/query-time-usage",projectCheckIn,httpOptions).pipe(
      map(data =>data),
      catchError(this.handleError)
    )
  }
}