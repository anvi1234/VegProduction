import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import{AppService} from "./app.service"
import { Contact } from './contact';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService],
})
export class AppComponent implements OnInit {
  contact:Contact;
  contacts:Contact[]=[];
  title = 'project';
     

  name:String;
  email:String;
  mobile:Number;
  image1="assets/image/image1.jpeg";
  image2="assets/image/image2.jpeg";
  image3="assets/image/image3.jpeg";
  image4="assets/image/image4.jpeg";
  image5="assets/image/image5.jpeg";
  image6="assets/image/image6/image6.jpeg";
  image7="assets/image/image7.jpeg"
  image8="assets/image/image8.jpeg"
  about=["flower","fruits"]

 
  constructor(config: NgbCarouselConfig,private contactservice:AppService,private router:Router) {
    // customize default values of carousels used by this component tree
    config.interval=1000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators=false;
    
  }

  addContact(){
    console.log(this.name);
    console.log(this.email);
    console.log(this.mobile);
    this.contactservice.addContact(this.name, this.email, this.mobile).subscribe((r:any)=>{
      console.log(r);
      if(r._body=='Inserted'){
        window.location.reload();
      }
    })
  }




  ngOnInit(){
     
  }
    
}