import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }


  // getData(){
  //   return this.http.get('http://localhost:4200/api/getData')
  // }

  // async getData(){
  // return this.http.get('http://localhost:4200/api/getData').toPromise().then(data => {
  //     console.log('Promise resolved.')
  //   });
  // }

  // async getData(){
  //     var asyncResult = await this.http.get('http://localhost:4200/api/getData').toPromise();
  //     return asyncResult;
  //   }


  // get(): Observable<any>{
  //   return this.http.get('http://localhost:4200/api/getData')
  // }

  // postAPIData(){
  //   return this.http.post('/api/postData', {'firstName' : 'Code', 'lastName' : 'Handbook'})
  // }

}
