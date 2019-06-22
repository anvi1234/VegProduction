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
    addContact(name, email, mobile){
      let tosend = new FormData()
      tosend.append('name', name)
      tosend.append('email', email)
      tosend.append('mobile', mobile)
      tosend.append('submit', 'true')
      return this.http.post('http://www.pranveg.com/User.php', tosend);
    }


}