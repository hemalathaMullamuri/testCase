import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class UserService {
  private _apiUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private http:Http) { }
  getUsers(){
    return this.http.get(this._apiUrl)
    .toPromise()

  }

}
