import { Component, OnInit } from '@angular/core';
import { DndDropEvent,DropEffect} from 'ngx-drag-drop';
import { field, value } from '../global.model';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import * as menudata from './json-files/menu-json/menu-data.json';
import * as labelsData from './json-files/text-json/text-labels.json';
import * as namesData from './json-files/text-json/names.json';

import * as emaillabelsData from './json-files/email-json/emailLabels.json';
import * as emailValues from './json-files/email-json/emailValue.json';

import * as phoneLabelData from './json-files/phone-json/phoneLabels.json';
import * as phoneValueData from './json-files/phone-json/phoneValue.json';

import * as selectLabelData from './json-files/dropdown-json/selectLabel.json';
import * as selectValueData from './json-files/dropdown-json/selectValue.json';

import * as staticTitleData from './json-files/static.json';

import { $, element } from 'protractor';
import { style } from '@angular/animations';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import { saveAs } from 'file-saver';



@Component({
  selector: 'app-edit-app',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent implements OnInit {

  value:value={
    label:"",
    value:""
  };
  success = false;

  result: string;
  selectedOptionLabel: string;
  selectedOptionValue: string;
  selectedOptionName: string;
  option1: string;
  option2: string;


//For the purpose of localization we are storing all the menu items, corresponding labels and values in separate json files.

//menu data 
public data: any = (menudata as any).default;

//text
public labels: any = (labelsData as any).default;
public names: any = (namesData as any).default;

//email
public emailValue: any = (emailValues as any).default;
public emaillabels: any = (emaillabelsData as any).default;

//phone
public phoneValue: any = (phoneValueData as any).default;
public phoneLabel: any = (phoneLabelData as any).default;

//select
public selectValue: any = (selectValueData as any).default;
public selectLabel: any = (selectLabelData as any).default;

public staticTitle: any = (staticTitleData as any).default;


//Array objects for labels and names

//array for text data
labelModels:Array<field>=this.labels;
nameModels:Array<field>=this.names;

//array for email data
emaillabelModels:Array<field>=this.emaillabels;
emailValueModels:Array<field>=this.emailValue;

//array for phone data
phoneValueModels:Array<field>=this.phoneValue;
phoneLabelModels:Array<field>=this.phoneLabel;

//array for select drop down data
selectValueModels:Array<field>=this.selectValue;
selectLabelModels:Array<field>=this.selectLabel;

//array for menu data
fieldModels:Array<field>= this.data;

//array for form name, description and date
modelFields:Array<field>=[];
model:any = {
  name:'Form-name',
  description:'Form-description',
  date: 'mm/dd/yyyy',
  theme:{
    bgColor:"ffffff",
    textColor:"555555",
    bannerImage:""
  },
  attributes:this.modelFields
};

report = false;
reports:any = [];

constructor(
  private route:ActivatedRoute
) { }

ngOnInit() {

}




onDragStart(event:DragEvent) {
  console.log("drag started", JSON.stringify(event, null, 2));
}

onDragEnd(event:DragEvent) {
  console.log("drag ended", JSON.stringify(event, null, 2));
}

onDraggableCopied(event:DragEvent) {
  console.log("draggable copied", JSON.stringify(event, null, 2));
}

onDraggableLinked(event:DragEvent) {
  console.log("draggable linked", JSON.stringify(event, null, 2));
}
  
  onDragged( item:any, list:any[], effect:DropEffect ) {
  if( effect === "move" ) {
    const index = list.indexOf( item );
    list.splice( index, 1 );
  }
}
      
onDragCanceled(event:DragEvent) {
  console.log("drag cancelled", JSON.stringify(event, null, 2));
}

onDragover(event:DragEvent) {
  console.log("dragover", JSON.stringify(event, null, 2));
}

onDrop( event:DndDropEvent, list?:any[] ) {
  if( list && (event.dropEffect === "copy" || event.dropEffect === "move") ) {
    if(event.dropEffect === "copy")
    event.data.name = event.data.type+'-'+new Date().getTime();
    let index = event.index;
    if( typeof index === "undefined" ) {
      index = list.length;
    }
    list.splice( index, 0, event.data );
  }


  // console.log(JSON.stringify(this.fieldModels[0]['column-1'][0]));
  //fieldModels[0] -> item

//code to display div on drop event


//add transition effect
var area = document.getElementById('drop-area-text');
area.style.display = "none";
var col2 = document.getElementById('column-2');
col2.style.width = "43%";
col2.style.transition = "1s";

var col2 = document.getElementById('columnId-3')
col2.style.display = "block";


//if the dropped label is 'text' - hide all other divs in column-3 and display menu for text in column 3
  if(event.data.label === "Text"){
    var x = document.getElementById('columnTextId-3');
    this.hideOtherDivs(x);
    x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    x.style.transition = "1s";
    x.style.padding = "5%";
    x.style.display = "block";  
  }

  //if the dropped label is 'email' - hide all other divs in column-3 and display menu for email in column 3
  else if(event.data.label === "Email"){
    var x = document.getElementById("columnEmailId-3");
    this.hideOtherDivs(x);
    x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    x.style.transition = "1s";
    x.style.padding = "5%";
    x.style.display = "block"
  }

  //if the dropped label is 'phone' - hide all other divs in column-3 and display menu for phone in column 3
  else if(event.data.label === "Phone"){
    var x = document.getElementById("columnPhoneId-3");
    this.hideOtherDivs(x);
    x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    x.style.transition = "1s";
    x.style.padding = "5%";
    x.style.display = "block";

  }

  //if the dropped label is 'select menu' - hide all other divs in column-3 and display menu for select menu in column 3
  else if(event.data.label === "Select"){
    var x = document.getElementById("columnSelectId-3");
    this.hideOtherDivs(x);
    x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    x.style.transition = "1s";
    x.style.padding = "5%";
    x.style.display = "block";

  }


  else if(event.data.label === "Submit"){
    var x = document.getElementById("columnSelectId-3");
    this.hideOtherDivs(x);
    x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    x.style.transition = "1s";
    x.style.padding = "5%";
    x.style.display = "block";
  }


}

// addValue(values){
//   values.push(this.value);
//   this.value={label:"",value:""};
// }


//function call to show pop up on deleting a field - should delete column 3 as well and remove from saved form as well
removeField(i,type){
  Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to remove this field?",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'rgb(70, 129, 110)',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, remove!'
  }).then((result) => {
    if (result.value) {
      this.model.attributes.splice(i,1);
      if(type === 'text'){
        var col3 = document.getElementById('columnTextId-3');
        col3.style.display = "none";
      }
    else if(type === 'email'){
        var col3 = document.getElementById('columnEmailId-3');
        col3.style.display = "none";
      }
    else if(type === 'phone'){
        var col3 = document.getElementById('columnPhoneId-3');
        col3.style.display = "none";
      }
    else if(type === 'select'){
        var col3 = document.getElementById('columnSelectId-3');
        col3.style.display = "none";
      }
    }
  });
}

/* no need
updateForm(){
  let input = new FormData;
  input.append('id',this.model._id);
  input.append('name',this.model.name);
  input.append('description',this.model.description);
  input.append('bannerImage',this.model.theme.bannerImage);
  input.append('bgColor',this.model.theme.bgColor);
  input.append('textColor',this.model.theme.textColor);
  input.append('attributes',JSON.stringify(this.model.attributes));

}
*/


//no use right now - but can be used to get length of the amount of dropped items

// initReport(){
//   this.report = true; 
//   let input = {
//     id:this.model._id
//   }
   
// console.log(this.model.name);
// console.log(this.model.description);
// console.log(this.model.date);
// }


//set text label after selecting value from column-3 drop down
setLabel(x,y,required){
  var l = document.getElementById("text-form");
  l.textContent = x;
  l.style.fontSize = "small";
  l.style.marginLeft = "10px";

  var n = document.getElementById("text-form-id")
  n.setAttribute('value', y);
  n.style.fontSize = "small";

  if(required === "yes")
  document.getElementById("text-form").append("*");
}

//set email label after selecting value from column-3 drop down
setEmailLabel(x,y,required){
  var l = document.getElementById("email-form");
  l.textContent = x;
  var n = document.getElementById("email-form-id")
  n.setAttribute('value', y);
  if(required === "yes")
  document.getElementById("email-form").append("*");
}

//set phone label after selecting value from column-3 drop down
setPhoneLabel(x,y,required){
  var l = document.getElementById("phone-form");
  l.textContent = x;
  var n = document.getElementById("phone-form-id")
  n.setAttribute('value', y);
  if(required === "yes")
  document.getElementById("phone-form").append("*");
}

setSelectLabel(x,y,z){
  var l = document.getElementById("select-form");
  l.textContent = x;
  l.style.fontSize = "small";
  var a = document.getElementById("select-option1");
  var b = document.getElementById("select-option2");
  a.textContent = y;
  b.textContent = z;

}

edit(){
  var my_div = document.getElementById('preview-test');
  my_div.style.display = "none";

  var col2 = document.getElementById('column-2');
  col2.style.display = "block";

}

//preview the form.
preview(){
  //logic to toggle preview popup
  var col2 = document.getElementById('column-2');
  col2.style.display = "none";
  //if the new div is created then check if dsiplay is none or block and toggle.
  if(document.getElementById('new_div') != null){
          document.getElementById('preview-test').style.display = "block";
          document.getElementById('new_div').style.margin = "2%";
          document.getElementById('new_div').style.padding = "2%";
          document.getElementById('new_div').style.marginTop = "2%";
          document.getElementById('new_div').style.width = "43%";
          document.getElementById('new_div').style.height = "auto%";
          document.getElementById('new_div').style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
          document.getElementById('new_div').style.transition = "width height 2s";
          // var input = (<HTMLInputElement>document.getElementById("form-description")).value;
          // var element = document.getElementById("form-description");
          // element.setAttribute("value", input);
  }
}

//function to get preview div and convert it to json and html
save(){
  console.log("form saved");
  //if new div has already been created then update it
  if(document.getElementById('new_div') != null){
      //extract div element of which need json
      var elements = document.getElementById("preview");
      //npm install html2json
      //import html2json library
      var html2json = require('html2json').html2json;
      //import json2html library
      var json2html = require('html2json').json2html;

      //get json of div element
      var json =  html2json(elements.innerHTML);

      //stringify the json
      var theJSON = JSON.stringify(json);
      //console.log(theJSON);
      
    
      //console.log(save_data[0]);

      //get html of that json
      var html = json2html(json);
      document.getElementById('new_div').innerHTML = html;
  }
  //else if first time clicking save create new div and append.
  else{
      var elements = document.getElementById("preview");
      var html2json = require('html2json').html2json;
      var json2html = require('html2json').json2html;
      var json =  html2json(elements.innerHTML);
      var theJSON = JSON.stringify(json);
      // const blob = new Blob([JSON.stringify(theJSON)], {type : 'application/json'});
      // saveAs(blob, 'abc.json');   
      //console.log(theJSON);
      var html = json2html(json);
      var old_div = document.getElementById('preview-test');
      var new_div = document.createElement('div');
      new_div.id = 'new_div';
      new_div.style.display = "block";
      new_div.style.width = "80%";
      new_div.style.width = "80%";
      new_div.innerHTML = html;
      old_div.appendChild(new_div);
      
  }

}


// //!!!!function to write saved data to a file - need to work on this

// /*
// outputJSONfile(data){
  
//   const fs = require('fs');
//   fs.writeFile("output.json", data, 'utf8', function (err) {
//     if (err) {
//         console.log("An error occured while writing JSON Object to File.");
//         return console.log(err);
//     }
  
//     console.log("JSON file has been saved.");
// });
// }*/



//function to hide all other divs when a label is dropped and clicked on  
hideOtherDivs(div){
  var Divs = ['columnTextId-3', 'columnEmailId-3','columnPhoneId-3','columnSelectId-3'];
  //var Divs = ['columnTextId-3'];
  for(var i=0;i<Divs.length;i++){
    if(div != document.getElementById(Divs[i])){
      document.getElementById(Divs[i]).style.display = "none";
    }
  }
}

column2Transition(){
  var col2 = document.getElementById('column-2');
  col2.style.width = "43%";
  col2.style.transition = "1s";

}

//diplay column 3 for text item on click
displayColumn3Text() {
  var x = document.getElementById("columnTextId-3");
  this.hideOtherDivs(x)
  this.column2Transition();
  x.style.display = "block";
}

//diplay column 3 for email item on click
displayColumn3Email() {
  var x = document.getElementById("columnEmailId-3");
  this.hideOtherDivs(x);
  this.column2Transition();
  x.style.display = "block";
}

//diplay column 3 for phone item on click
displayColumn3Phone() {
  var x = document.getElementById("columnPhoneId-3");
  this.hideOtherDivs(x);
  this.column2Transition();
  x.style.display = "block";
}

//diplay column 3 for select item on click
displayColumn3Select(){
  var x = document.getElementById("columnSelectId-3");
  this.hideOtherDivs(x)
  this.column2Transition();
  x.style.display = "block";
}
  
//function to close the column-3 popup
closeFunction(id){
  var x = document.getElementById(id);
  x.style.display = "none";

  var col2 = document.getElementById('column-2');
  col2.style.width = "75%";
  col2.style.transition = "1s";
}

getKeys(obj){
  return Object.keys(obj)
}

conditionalLogic(){
  var x = document.getElementById('conditional-logic');
  x.style.display = "none";

  document.getElementById('conditional-logic-options').style.display = "block";

}

// //note sure what this is used for??
// /*
// toggleValue(item){
//   item.selected = !item.selected;
// }*/
// /*
// submit(){
//   let valid = true;
//   let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
//   validationArray.reverse().forEach(field => {
//     console.log(field.label+'=>'+field.required+"=>"+field.value);
//     if(field.required && !field.value && field.type != 'checkbox'){
//       swal('Error','Please enter '+field.label,'error');
//       valid = false;
//       return false;
//     }
//     if(field.required && field.regex){
//       let regex = new RegExp(field.regex);
//       if(regex.test(field.value) == false){
//         swal('Error',field.errorText,'error');
//         valid = false;
//         return false;
//       }
//     }
//     if(field.required && field.type == 'checkbox'){
//       if(field.values.filter(r=>r.selected).length == 0){
//         swal('Error','Please enterrr '+field.label,'error');
//         valid = false;
//         return false;
//       }

//     }
//   });
//   if(!valid){
//     return false;
//   }
//   console.log('Save',this.model);
//   let input = new FormData;
//   input.append('formId',this.model._id);
//   input.append('attributes',JSON.stringify(this.model.attributes))
// }*/
}
