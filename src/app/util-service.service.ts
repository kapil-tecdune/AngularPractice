import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor(private http: HttpClient) { }


  getUserList(){
    return this.http.get<any>(environment.server +'/users')
      .toPromise()
      .then(result => result)
  }

  saveUserData(obj : any){
    return this.http.post<any>(environment.server +'/users' , obj)
    .toPromise()
    .then(result => result)
  }

  updateUserData(obj : any){
    return this.http.put<any>(environment.server + '/users' + '/' + obj.id, obj)
    .toPromise()
    .then(result => result)
  }
}
