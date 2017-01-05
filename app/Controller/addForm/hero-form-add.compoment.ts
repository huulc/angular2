import { Component } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Hero }    from '../../Model/hero';
import {FirebaseService} from '../../Service/firebase.service';


@Component({
  moduleId: module.id,
  selector: 'hero-form-add',
  templateUrl: '../../View/hero-form-add.html',
  providers: [FirebaseService]
})
export class HeroFormAddComponent {
  models: Hero[] = [];
  powers = ['nam', 'nu', 'khong'];
  submitted = false;
  slug: any;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private _firebaseService: FirebaseService){}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.params.forEach((params: Params) => {
      // console.log(params['slug']);
        if (params['slug'] !== 'add') {
          //vao day la edit
          this.slug = params['slug'];
          this._firebaseService.getUser(this.slug)
                    .then(response => {
                        this.models = response;
                    });          
        } else {
          // neu slug = 01 thi lay ra tat ca
          this._firebaseService.getUser('01')
                    .then(response => {
                        this.models = response;
                    });
        }
    });
  }
  
  onSubmit() {
    let id = this.models['id'];
    let name = this.models['Name'];
    let Age = this.models['Age'];
    let gioitinh = this.models['gioitinh'];
    if(this.slug !== 'add'){
      let key_id = this.slug;
      this._firebaseService.editUser(key_id, id, name, Age, gioitinh)
                            .then(response => {
                                this.models = response;
                            });
      this.submitted = true;
      this.router.navigate(['/listuser']);
    }else{
      this._firebaseService.addUser(id, name, Age, gioitinh)
                            .then(response => {
                                this.models = response;
                            });
      this.submitted = true;
      this.router.navigate(['/newuser/add']);
    }
  }
  
  generateArray(obj:any){
    console.log(obj);
     return Object.keys(obj).map((key)=>{ return obj[key]});
  }


}
