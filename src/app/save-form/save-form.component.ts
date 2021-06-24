import { Component, OnInit } from '@angular/core';
import { DndDropEvent,DropEffect} from 'ngx-drag-drop';
import { field, value } from '../global.model';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import * as menudata from './menu-data.json';
import * as labelsData from './text-labels.json';
import * as emaillabelsData from './email-labels.json';
import * as namesData from './names.json';
import { BuiltinTypeName } from '@angular/compiler';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addRow() {
    var formTab = document.getElementById('form-table') as HTMLTableElement;
    var rowCnt = formTab.rows.length;   // table row count.
    var tr = formTab.insertRow(rowCnt); // the table row.
    tr = formTab.insertRow(rowCnt);
    for (var c = 0; c < 3; c++) {
        var td = document.createElement('td');
        td = tr.insertCell(c);
        if (c == 2) {     
            var delbtn = document.createElement('input');
            var editbtn = document.createElement('input');
            // set input attributes.
            delbtn.setAttribute('type', 'button');
            editbtn.setAttribute('type', 'button');

            delbtn.setAttribute('value', 'Delete');
            editbtn.setAttribute('value', 'Edit');
            
            //----?????---
            delbtn.setAttribute('id', 'remove-button');
            editbtn.setAttribute('id', 'edit-button');

            editbtn.setAttribute('style', 'margin-right: 5px');
            td.appendChild(editbtn);
            td.appendChild(delbtn);
            
            
        }
        else {
            // 2nd, 3rd and 4th column, will have textbox.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');
            td.appendChild(ele);
        }
    }


  }

  removeRow(){

  }



}
