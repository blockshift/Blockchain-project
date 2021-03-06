import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AppService {

  constructor(private http:Http) { }


  createstamp(username,coursename,startdate,enddate,nric){
   console.log("Name",username);
   

 
  let headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({ headers: headers });
  let body = {
                name: username,
                course: coursename,
                startdate:startdate,
                enddate:enddate,  
                nric:nric
                };

return this.http.post('https://gravypts.com/saverecord', body, options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));  



/* let body = new URLSearchParams();
body.set('name', username);
body.set('id', tokenid);
 let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  let options = new RequestOptions({ headers: headers });

this.http
    .post('http://ec2-35-168-114-210.compute-1.amazonaws.com:8080/postrecord', body.toString(), options)
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));  

*/


}


}



