import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {Contact} from "./contact";
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
  

export class AppService {


Url="http://localhost:8900/api/contacts";   

  constructor(private http:Http) { 
  
    
  }
    //retrieving contact service
    addContact(newContact){
      var headers=new Headers();
      headers.append('Content-Type','appliction-json');
      return this.http.post(this.Url,newContact,{headers:headers}).pipe(map(res=>res.json()));
    }
}