import { Component } from '@angular/core';
import { Hero }    from '../Model/hero';
import {FirebaseService} from '../Service/firebase.service';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../View/hero-form.html',
  providers: [FirebaseService]
})
export class HeroFormComponent {
  models: Hero[] = [];
  powers = ['nam', 'nu', 'khong'];
  submitted = false;
  constructor(private _firebaseService: FirebaseService){}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // neu la 01 thi lay ra tatca
    this._firebaseService.getUser('01')
                          .then(response => {
                              this.models = response;
                          });
  }

  generateArray(obj:any){
    let arr = Object.keys(obj).map((key)=>{
        obj[key]['key_id'] =  key;
        console.log(obj); 
       return obj[key]
     });
     return arr;
  }

}
