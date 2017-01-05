import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/operator/last';
import 'rxjs/Rx';
// vì thằng Observable không có toPromise nên phải import hằng operator mà đã extend Observable
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FirebaseService{

	constructor(private http: Http) {
    }

    setUser(id: number, name: string, Age: number, gioitinh: string){
    	const body = JSON.stringify({id: id, Name: name, Age: Age, gioitinh: gioitinh});
    	return this.http.put('https://listungvien.firebaseio.com/user.json?auth=Tn5sEzM7t8Lotmy9OqAI8JOElqjX0a8USiF0duhA', body)
    				.toPromise()
		            .then(
		                response => response.json()
		            )
		            .catch(this.handleError);
    }
    editUser(key_id:any, id: number, name: string, Age: number, gioitinh: string){
        const body = JSON.stringify({id: id, Name: name, Age: Age, gioitinh: gioitinh});
        return this.http.patch('https://listungvien.firebaseio.com/user/'+key_id+'.json?auth=Tn5sEzM7t8Lotmy9OqAI8JOElqjX0a8USiF0duhA', body)
                    .toPromise()
                    .then(
                        response => response.json()
                    )
                    .catch(this.handleError);
    }

    addUser(id: number, name: string, Age: number, gioitinh: string){
        const body = JSON.stringify({id: id, Name: name, Age: Age, gioitinh: gioitinh});
        return this.http.post('https://listungvien.firebaseio.com/user.json?auth=Tn5sEzM7t8Lotmy9OqAI8JOElqjX0a8USiF0duhA', body)
                    .toPromise()
                    .then(
                        response => response.json()
                    )
                    .catch(this.handleError);
    }

    getUser(id: any){
        // console.log(id);
        // 01: lay ra all
        if(id == '01'){
    		return this.http.get('https://listungvien.firebaseio.com/user.json?auth=Tn5sEzM7t8Lotmy9OqAI8JOElqjX0a8USiF0duhA')
                .toPromise()
                .then(
                    response => response.json()
                )
                .catch(this.handleError);
        }else{
            return this.http.get('https://listungvien.firebaseio.com/user/'+id+'.json?auth=Tn5sEzM7t8Lotmy9OqAI8JOElqjX0a8USiF0duhA')
                .toPromise()
                .then(
                    response => response.json()
                )
                .catch(this.handleError);
        }
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}