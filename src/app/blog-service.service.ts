import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";



const base_url = 'https://json-server-heroku-obkkumagaj.now.sh/';
//const base_url = 'http://localhost:3000/';

@Injectable()
export class BlogServiceService {

  constructor(private http:Http) { }


  getBlogs():Observable<any>{
    return this.http.get(base_url+'blogs').map(res=>res.json());
  }

  registerUser(data):Observable<any>{
    let headers=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:headers});
    let body=JSON.stringify(data);
    return this.http.post(base_url+'users',body,option).map(res=>res.json());
  }
  verifyUser():Observable<any>{
    return this.http.get(base_url+'users').map(res=>res.json());
  }

  postblog(data):Observable<any>{
    let headers=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:headers});
    let body=JSON.stringify(data);
    return this.http.post(base_url+'blogs',body,option).map(res=>res.json());
  }
}
