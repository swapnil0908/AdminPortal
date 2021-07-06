import { Component, OnInit, Renderer2 } from '@angular/core';
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

import * as sectionId from './json-files/section-json/sectionID.json';
import * as sectionLabel from './json-files/section-json/sectionLabel.json';

import * as dateID from './json-files/date-json/dateId.json';
import * as dateLabel from './json-files/date-json/dateLabel.json';

import * as staticTitleData from './json-files/static.json';


import { $, element } from 'protractor';
import { style } from '@angular/animations';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import { saveAs } from 'file-saver';
import { RecaptchaModule } from "ng-recaptcha";







@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent implements OnInit {

  constructor(private renderer: Renderer2){

  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }


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
  logicOption1: string;
  logicOption2: string;
  logicOption3: string;
  


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

public sectionId: any = (sectionId as any).default;
public sectionLabel: any = (sectionLabel as any).default;


public dateId: any = (dateID as any).default;
public dateLable: any = (dateLabel as any).default;

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

sectionIdModels:Array<field>=this.sectionId;
sectionLabelModels:Array<field>=this.sectionLabel;

dateIdModels:Array<field>=this.dateId;
dateLabelModels:Array<field>=this.dateLable;

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



ngOnInit(): void {

let script = this.renderer.createElement('script');
script.defer = true;
script.sync = true;
script.rc = "https://www.google.com/recaptcha/api.js";
this.renderer.appendChild(document.body, script);


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
  
  let index = event.index;
  if( list && (event.dropEffect === "copy" || event.dropEffect === "move") ) {
    if(event.dropEffect === "copy"){
    event.data.name = event.data.type+'-'+new Date().getTime();
    }
    
    if( typeof index === "undefined" ) {
      index = list.length;
    }
    list.splice(   index, 0, event.data );
  }

  let dropArea = document.getElementById('drop-area-text');
  dropArea.style.display = "none";

  let id = event.data.divId + index;
  this.hideOtherDivs(id);

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
  n.setAttribute('id', y);
  

  if(required === "yes")
  document.getElementById("text-form").append("*");
}

//set email label after selecting value from column-3 drop down
setEmailLabel(x,y,required){
  var l = document.getElementById("email-form");
  l.textContent = x;
  l.style.fontSize = "small";
  var n = document.getElementById("email-form-id")
  n.setAttribute('id', y);
  if(required === "yes")
  document.getElementById("email-form").append("*");
}

//set phone label after selecting value from column-3 drop down
setPhoneLabel(x,y,required){
  var l = document.getElementById("phone-form");
  l.textContent = x;
  l.style.fontSize = "small";
  var n = document.getElementById("phone-form-id")
  n.setAttribute('id', y);
  if(required === "yes")
  document.getElementById("phone-form").append("*");
}

setSelectLabel(x,y){
  var l = document.getElementById("select-form");
  l.textContent = x;
  l.style.fontSize = "small";
  var a = document.getElementById("select-option1");
  var b = document.getElementById("option1");
  a = b;
}

edit(){
  // var my_div = document.getElementById('preview');
  // my_div.style.display = "none";

  var preview = document.getElementById('preview-1');
  preview.style.display = "none";
  var col2 = document.getElementById('column-2');
  col2.style.display = "block"
  col2.style.width = "500%";

}

//preview the form.
preview(){
  //logic to toggle preview popup
  var col2 = document.getElementById('column-2');
  col2.style.display = "none";

  //if the new div is created then check if dsiplay is none or block and toggle.
  if(document.getElementById('preview-1') != null){
          document.getElementById('preview-1').style.display = "block";
  }
}

//function to get preview div and convert it to json and html
save(){
  

      var elements = document.getElementById("preview-1"); // preview-enter data manually
      var html2json = require('html2json').html2json;
      var json2html = require('html2json').json2html;
      var json =  html2json(elements.innerHTML);
      var theJSON = JSON.stringify(json);
      const blob = new Blob([JSON.stringify(theJSON)], {type : 'application/json'});
      saveAs(blob, 'test1.json');   
      //console.log(theJSON);

}


//function to hide all other divs when a label is dropped and clicked on  
hideOtherDivs(id){
    var list = document.querySelectorAll('[id*="-Id"]');
    for(var i=0;i<list.length;i++){
      console.log(list[i].id);
      if(id != list[i].id){
        document.getElementById(list[i].id).style.display = "none";
        document.getElementById(list[i].id).parentElement.style.display = "none";
      }
    }
}

column2Transition(){
  var col2 = document.getElementById('column-2');
  col2.style.width = "70%";
  col2.style.transition = "1s";

}

//diplay column 3 for select item on click
displaySection(i){
  var x = document.getElementById('section-Id' + i);
  this.hideOtherDivs(x.id)
  x.parentElement.style.display = "block";
  x.style.display = "block";
}

displayText(i){
  var x = document.getElementById('text-Id' + i);
  this.hideOtherDivs(x.id)
  x.parentElement.style.display = "block";
  x.style.display = "block";
}

displayEmail(i){
  var x = document.getElementById('email-Id' + i);
  this.hideOtherDivs(x.id);
  x.parentElement.style.display = "block";
  x.style.display = "block";
}

displayPhone(i){
  var x = document.getElementById('phone-Id' + i);
  this.hideOtherDivs(x.id)
  x.parentElement.style.display = "block";
  x.style.display = "block";
}


displayDate(i){
  var x = document.getElementById('date-Id' + i);
  this.hideOtherDivs(x.id)
  x.parentElement.style.display = "block";
  x.style.display = "block";
}

displaySelect(i){
  var x = document.getElementById('select-Id' + i);
  this.hideOtherDivs(x.id)
  x.parentElement.style.display = "block";
  x.style.display = "block";
}
  
//function to close the column-3 popup
closeFunction(id){
  //console.log(id);
  var x = document.getElementById(id);
  x.style.display = "none";
  x.parentElement.style.display = "none";

  var col2 = document.getElementById('column-2');
  col2.style.width = "80%";
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
