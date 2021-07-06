import { Component, OnInit } from '@angular/core';
import { RootService } from './user-registration.service';
import { DndDropEvent,DropEffect} from 'ngx-drag-drop';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { browser} from 'protractor';




@Component({
  selector: 'app-root',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  //constructor(private rootService : RootService) { }
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
  
    this.test()
  
  }

  async test(){
      
    await this.http.get('http://localhost:4200/api/getData').subscribe(data => {
      //console.log(data);

      //var obj = "{\"node\":\"root\",\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"_ngcontent-pde-c28\":\"\",\"class\":\"dropzone\"},\"child\":[{\"node\":\"element\",\"tag\":\"section\",\"attr\":{\"_ngcontent-pde-c28\":\"\",\"dnddropzone\":\"\",\"class\":\"dndDropArea\"},\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"_ngcontent-pde-c28\":\"\",\"id\":\"drop-area-text\",\"class\":\"drop-area-text\",\"style\":[\"display:\",\"none;\"]},\"child\":[{\"node\":\"element\",\"tag\":\"h5\",\"attr\":{\"_ngcontent-pde-c28\":\"\"},\"child\":[{\"node\":\"element\",\"tag\":\"b\",\"attr\":{\"_ngcontent-pde-c28\":\"\"},\"child\":[{\"node\":\"text\",\"text\":\"ADD FIELDS HERE\"}]}]},{\"node\":\"element\",\"tag\":\"h6\",\"attr\":{\"_ngcontent-pde-c28\":\"\"},\"child\":[{\"node\":\"text\",\"text\":\"Drag and drop a field from side bar to add it in your form\"}]}]},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"_ngcontent-pde-c28\":\"\",\"class\":[\"field\",\"form-group-1\"],\"draggable\":\"true\"},\"child\":[{\"node\":\"comment\",\"text\":\"\"},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"_ngcontent-pde-c28\":\"\",\"class\":\"dropped-element-text\"},\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"_ngcontent-pde-c28\":\"\",\"class\":\"drop-zone\"},\"child\":[{\"node\":\"element\",\"tag\":\"i\",\"attr\":{\"_ngcontent-pde-c28\":\"\",\"dndhandle\":\"\",\"class\":[\"fa\",\"fa-ellipsis-v\",\"dndHandle\"],\"draggable\":\"true\"}},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"_ngcontent-pde-c28\":\"\",\"id\":\"text-form\"},\"child\":[{\"node\":\"element\",\"tag\":\"label\",\"attr\":{\"_ngcontent-pde-c28\":\"\"},\"child\":[{\"node\":\"text\",\"text\":\"Text Label placeholder\"}]}]},{\"node\":\"text\",\"text\":\" --------------------------------------- \"},{\"node\":\"element\",\"tag\":\"input\",\"attr\":{\"_ngcontent-pde-c28\":\"\",\"type\":\"text\",\"id\":\"text-form-id\",\"placeholder\":[\"Value\",\"placeholder\"],\"class\":\"form-control\"}}]}]},{\"node\":\"comment\",\"text\":\"\"},{\"node\":\"comment\",\"text\":\"\"},{\"node\":\"comment\",\"text\":\"\"},{\"node\":\"comment\",\"text\":\"\"},{\"node\":\"comment\",\"text\":\"\"},{\"node\":\"comment\",\"text\":\"\"}]},{\"node\":\"comment\",\"text\":\"\"}]}]}]}";
      var obj1 = JSON.parse("" + data);
      var html2json = require('html2json').html2json;
      var json2html = require('html2json').json2html;

      var html = json2html(obj1);
      //var json =  html2json(html);
      //console.log(html);
      document.getElementById('test_div').innerHTML = html;
      document.getElementById('test_div').style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
      document.getElementById('test_div').style.transition = "1s";
      document.getElementById('test_div').style.padding = "5%";
      document.getElementById('test_div').style.display = "block";

    });

    //browser.sleep(2000);
  
  }

submitForm(){
    console.log('submitting form.....');
    const headers = new HttpHeaders({ 'client_id': 'ce20b855798644e79a5e884464bf2a6f',
                      'client_secret': 'F24AE2049FaD4fB0aCa43d3C7320D3fb',
                      'Content-Type': 'application/json'
    });

    // const headers = new HttpHeaders()
    //       .set('Authorization', 'my-auth-token')
    //       .set('Content-Type', 'application/json');

   
    
    var items = document.forms['Form1'].elements;
    //console.log(items);
    var json = {};
  
    
    for (var i=0; i<items.length; i++){
    if(document.forms['Form1'].elements[i].type !== 'submit'){
	    json[document.forms['Form1'].elements[i].id]  = document.forms['Form1'].elements[i].value;
    }

    }

    json["application_context"] =  "Customer portal";

    
    // let temp = JSON.stringify(json); 
    // let temp1 = JSON.parse(temp);
    let URL = 'http://dev-mule-ciam-create-user-source-api.us-w1.cloudhub.io/api/createUser';
    //let URL = 'http://localhost:4200/api/postData';

    

    // this.http.post('http://localhost:4200/api/postData', user, {
    //   headers: headers
    // })
    // .subscribe(data => {
    //   console.log(data);
    // });

    this.http.post<any>(URL, json, {'headers':headers})
    .subscribe(response=>{
      console.log(response);
    }, error => {
      console.log(JSON.stringify(error.json()));
    });
    
  }

  

}
