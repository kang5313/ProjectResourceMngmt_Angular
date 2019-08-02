import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Role } from '../app/roles'
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  roleUrl:string = 'http://localhost:3000/role'
  roles:Role={
    roleName : null,
    roleRate : null
  }
  
  constructor(private http:HttpClient) { }

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

  public getRoles(){
    return this.http.get(this.roleUrl+"/displayroles").pipe(
      map(data =>data),
      catchError(this.handleError)
    )
  }
}
