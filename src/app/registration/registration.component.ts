import { Component, OnInit } from '@angular/core';
import { DndDropEvent,DropEffect} from 'ngx-drag-drop';
import { field, value } from '../global.model';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import * as menudata from './menu-data.json';
import * as labelsData from './text-labels.json';
import * as emaillabelsData from './emailLabels.json';
import * as namesData from './names.json';
import * as emailValues from './emailValue.json';
import * as phoneLabelData from './phoneLabels.json';
import * as phoneValueData from './phoneValue.json';
import * as selectLabelData from './selectLabel.json';
import * as selectValueData from './selectValue.json';


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



//Array of objects 


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



labelModels:Array<field>=this.labels;
nameModels:Array<field>=this.names;

emaillabelModels:Array<field>=this.emaillabels;
emailValueModels:Array<field>=this.emailValue;

phoneValueModels:Array<field>=this.phoneValue;
phoneLabelModels:Array<field>=this.phoneLabel;

selectValueModels:Array<field>=this.selectValue;
selectLabelModels:Array<field>=this.selectLabel;


fieldModels:Array<field>= this.data;
/*
  fieldModels:Array<field>=[
    {
      "type": "text", 
      "icon": "fa-font",
      "label": "Text", // dropdown
      "description": "Enter your text",
      "placeholder": "Enter your texxt",
      "className": "form-control",
      "subtype": "text",
      "regex" : "",
      "handle":true,
    },
    {
      "type": "email",
      "icon": "fa-envelope",
      "required": true,
      "label": "Email",
      "description": "Enter your email",
      "placeholder": "Enter your email",
      "className": "form-control",
      "subtype": "text",
      "regex" : "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
      "errorText": "Please enter a valid email",
      "handle":true
    },
    {
      "type": "phone",
      "icon": "fa-phone",
      "label": "Phone",
      "description": "Enter your phone",
      "placeholder": "Enter your phone",
      "className": "form-control",
      "subtype": "text",
      "regex" : "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      "errorText": "Please enter a valid phone number",
      "handle":true
    },
    /*
    {
      "type": "number",
      "label": "Number",
      "icon": "fa-html5",
      "description": "Age",
      "placeholder": "Enter your age",
      "className": "form-control",
      "value": "20",
      "min": 12,
      "max": 90
    },
    {
      "type": "date",
      "icon":"fa-calendar",
      "label": "Date",
      "placeholder": "Date",
      "className": "form-control"
    },
    /*
    {
      "type": "datetime-local",
      "icon":"fa-calendar",
      "label": "DateTime",
      "placeholder": "Date Time",
      "className": "form-control"
    },*/
    /*
    {
      "type": "textarea",
      "icon":"fa-text-width",
      "label": "Textarea" 
    },
    {
      "type": "paragraph",
      "icon": "fa-paragraph",
      "label": "Paragraph",
      "placeholder": "Enter your paragraph here" 
    },

    {
      "type": "checkbox",
      "required": true,
      "label": "Checkbox",
      "icon":"fa-list",
      "description": "Checkbox",
      "inline": true,
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "radio",
      "icon":"fa-list-ul",
      "label": "Radio",
      "description": "Radio boxes",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    /*
    {
      "type": "autocomplete",
      "icon":"fa-bars",
      "label": "Select",
      "description": "Select",
      "placeholder": "Select",
      "className": "form-control",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
    {
      "type": "file",
      "icon":"fa-file",
      "label": "File Upload",
      "className": "form-control",
      "subtype": "file"
    },
    {
      "type": "button",
      "icon":"fa-paper-plane",
      "subtype": "submit",
      "label": "Submit"
    }
  ]; */

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
    // this.route.params.subscribe( params =>{
    //   console.log(params);
    //   this.us.getDataApi('/admin/getFormById',{id:params.id}).subscribe(r=>{
    //     console.log(r);
    //     this.model = r['data'];
    //   });
    // });

    // this.model = this.cs.data; 
    // console.log(this.model.data);
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

    //code to display div on drop
    console.log(event.data);
    

    if(event.data.label === "Text"){
          var x = document.getElementById('columnTextId-3');
          //var background = document.getElementById("columnId-3")
          this.hideOtherDivs(x);
          //background.style.boxShadow = "box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)";
          //background.style.transition= "0.3s";
          x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
          x.style.transition = "0.3s";
          x.style.padding = "5%";
          x.style.display = "block";
          
    }

    
    else if(event.data.label === "Email"){
          var x = document.getElementById("columnEmailId-3");
          this.hideOtherDivs(x);
          x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
          x.style.transition = "0.3s";
          x.style.padding = "5%";
          x.style.display = "block";

    }


    else if(event.data.label === "Phone"){
      var x = document.getElementById("columnPhoneId-3");
      this.hideOtherDivs(x);
      x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
      x.style.transition = "0.3s";
      x.style.padding = "5%";
      x.style.display = "block";

}


    else if(event.data.label === "Select"){
      console.log("here");
      var x = document.getElementById("columnSelectId-3");
      this.hideOtherDivs(x);
      x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
      x.style.transition = "0.3s";
      x.style.padding = "5%";
      x.style.display = "block";

    }

    /*
    else if(event.data.label === "Date"){
      var x = document.getElementById("columnDateId-3");
      this.hideOtherDivs(x);

      x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
      x.style.transition = "0.3s";
      x.style.padding = "5%";
      x.style.display = "block";
      x.style.display = "block";

    }*/

    //console.log(this.data);
  }

  addValue(values){
    values.push(this.value);
    this.value={label:"",value:""};
  }

  removeField(i){
    swal({
      title: 'Are you sure?',
      text: "Do you want to remove this field?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {
        this.model.attributes.splice(i,1);
      }
    });

  }

  updateForm(){
    let input = new FormData;
    input.append('id',this.model._id);
    input.append('name',this.model.name);
    input.append('description',this.model.description);
    input.append('bannerImage',this.model.theme.bannerImage);
    input.append('bgColor',this.model.theme.bgColor);
    input.append('textColor',this.model.theme.textColor);
    input.append('attributes',JSON.stringify(this.model.attributes));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }

  initReport(){
    this.report = true; 
    let input = {
      id:this.model._id
    }
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
    //console.log(this.model.attributes);

    console.log(this.model.name);
    console.log(this.model.description);
    console.log(this.model.date);

    //this.testFunction();

  }
    /*
    testFunction(){
      console.log(this.model.attributes);
      for(var i=0;i<this.model.attributes.length;i++)
      if(this.model.attributes[i].label === "Text")
        console.log("text hai");
      else if(this.model.attributes[i].label === "Email")
        console.log("email hai");
    }*/


    setLabel(x,y,required){
      var l = document.getElementById("text-form");
      l.textContent = x;
      var n = document.getElementById("text-form-id")
      n.setAttribute('value', y);
      if(required === "yes")
      document.getElementById("text-form").append("*");
    }


    setEmailLabel(x,y,required){
      var l = document.getElementById("email-form");
      l.textContent = x;
      var n = document.getElementById("email-form-id")
      n.setAttribute('value', y);
      if(required === "yes")
      document.getElementById("email-form").append("*");
    }


    setPhoneLabel(x,y,required){
      var l = document.getElementById("phone-form");
      l.textContent = x;
      var n = document.getElementById("phone-form-id")
      n.setAttribute('value', y);
      if(required === "yes")
      document.getElementById("phone-form").append("*");
    }



  
  hideOtherDivs(div){
      var Divs = ['columnTextId-3', 'columnEmailId-3','columnPhoneId-3','columnSelectId-3'];
      for(var i=0;i<Divs.length;i++){
        if(div != document.getElementById(Divs[i])){
          document.getElementById(Divs[i]).style.display = "none";
        }
    }
  }
/* //code for draggable icon popup (move up / down/ delete)
  iconPopUp(){
    var x = document.getElementById("stack-top");
    if(x.style.display === "none"){
    x.style.background = "gray";
      x.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
      x.style.width = "10%";
      x.style.position = "right";
      x.style.transition = "0.3s";
      x.style.padding = "5%";
      x.style.display = "block";
      x.style.zIndex = "9";
      x.style.margin = "20px";
    }
    else{
      x.style.display = "none";
    }
  }*/

  displayColumn3Text() {
    
    var x = document.getElementById("columnTextId-3");
    this.hideOtherDivs(x)
    //code to make all other divs hidden
      x.style.display = "block";
      
  }

  displayColumn3Email() {
    var x = document.getElementById("columnEmailId-3");

    //code to make all other divs hidden
      this.hideOtherDivs(x);
      x.style.display = "block";
      
  }

  displayColumn3Phone() {
    var x = document.getElementById("columnPhoneId-3");
    console.log(x);
    //code to make all other divs hidden
      this.hideOtherDivs(x);
      x.style.display = "block";
      
  }

  displayColumn3Select(){
    var x = document.getElementById("columnSelectId-3");
    this.hideOtherDivs(x)
    //code to make all other divs hidden
    x.style.display = "block";
  }
  
  closeFunction(id){
    var x = document.getElementById(id);
    x.style.display = "none";
  }

  toggleValue(item){
    item.selected = !item.selected;
  }

  submit(){
    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach(field => {
      console.log(field.label+'=>'+field.required+"=>"+field.value);
      if(field.required && !field.value && field.type != 'checkbox'){
        swal('Error','Please enter '+field.label,'error');
        valid = false;
        return false;
      }
      if(field.required && field.regex){
        let regex = new RegExp(field.regex);
        if(regex.test(field.value) == false){
          swal('Error',field.errorText,'error');
          valid = false;
          return false;
        }
      }
      if(field.required && field.type == 'checkbox'){
        if(field.values.filter(r=>r.selected).length == 0){
          swal('Error','Please enterrr '+field.label,'error');
          valid = false;
          return false;
        }

      }
    });
    if(!valid){
      return false;
    }
    console.log('Save',this.model);
    let input = new FormData;
    input.append('formId',this.model._id);
    input.append('attributes',JSON.stringify(this.model.attributes))
    // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','You have contact sucessfully','success');
    //   this.success = true;
    // },error=>{
    //   swal('Error',error.message,'error');
    // });
  }

}
