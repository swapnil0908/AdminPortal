import { Component, OnInit } from '@angular/core';
import { DndDropEvent,DropEffect} from 'ngx-drag-drop';
import { field, value } from '../global.model';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import * as menudata from './menu-data.json';
import * as labelsData from './text-labels.json';
import * as emaillabelsData from './email-labels.json';
import * as namesData from './names.json';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
