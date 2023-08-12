import { Component, Input, OnInit } from '@angular/core';
import { ConsolidatedViewComponent } from '../consolidated-view/consolidated-view.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit{
  data:any;

  @Input() child :any;
  constructor(){
  }

  ngOnInit(){
    
  }
}
