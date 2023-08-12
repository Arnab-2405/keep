import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-consolidated-view',
  templateUrl: './consolidated-view.component.html',
  styleUrls: ['./consolidated-view.component.css']
})
export class ConsolidatedViewComponent implements OnInit{

  data :any;

  constructor(private noteService :NotesService){
    
  }

  ngOnInit(){
    this.noteService.getNotes().subscribe((res :any)=>{
      this.setData(res);
    });
  }

  setData(res :any){
    this.data=res;
  }

}
