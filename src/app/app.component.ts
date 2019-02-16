import { Component } from '@angular/core';
import { AppService } from './app.service';
import * as shajs from 'sha.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private exampleService: AppService){}	
    onSubmit(value: any) {
    console.log(value);
   // var hash=shajs('sha256').update(value.name).digest('hex');
 //  console.log("Hash",hash);
    this.exampleService.createstamp(value.name,value.id).subscribe(data => {
try {

// Do json parsing and filter stamp id and timestamp when successfully added into blockchain

    console.log("Data received",data);
    var response = data["_body"];
    var parseresponse = JSON.parse(response);

    var stampid = parseresponse.stampid;
    var timestamp = parseresponse.timestamp;
    console.log("Stamp id received",stampid);
    console.log("Timestamp",timestamp);

}
catch(e){

// Print this error on frontend when stamping failed
	console.log("Error");
}    

    });





  }
}
