import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {routing} from './app.routing';

import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';

import { HeroFormComponent } from './Controller/hero-form.compoment';
import { HeroFormAddComponent } from './Controller/addForm/hero-form-add.compoment';
import { FirebaseService } from './Service/firebase.service';

@NgModule({
  imports:      [ 
  	BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroFormAddComponent
  ],
  providers:[
    FirebaseService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
