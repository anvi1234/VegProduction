import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import{FormsModule} from "@angular/forms";

import {Routes,RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContactComponent} from "./contact.component";

import { VegetableComponent } from './vegetables.component';
import { CeralsComponent } from './cerals.component';



import { FruitComponent } from './fruit.component';
import { NgMarqueeModule } from 'ng-marquee';
import { StartComponent } from './start.componet';


export const routes:Routes=[
  {path:"vegetable",component:VegetableComponent},
  {path:"cerealsproduct",component:CeralsComponent},
  {path:"fruitproduct",component:FruitComponent},
  {path:"contact",component:ContactComponent},
  {path:"",component:AppComponent},
  {path:"**",component:AppComponent},
  {path:"start",component:AppComponent}

]





@NgModule({
  declarations: [
    AppComponent,ContactComponent,CeralsComponent,VegetableComponent,FruitComponent,StartComponent
  ],
  imports: [
    BrowserModule,NgbModule,HttpModule ,FormsModule,
    AppRoutingModule,RouterModule.forRoot(routes),NgMarqueeModule
  ],
  providers: [],
  bootstrap: [  StartComponent]
})
export class AppModule { }
