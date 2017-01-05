import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from './Service/firebase.service';
@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl: 'View/layout.html',
})
export class AppComponent  { 
	constructor(public router: Router, private _firebaseService: FirebaseService) {
    }

}
