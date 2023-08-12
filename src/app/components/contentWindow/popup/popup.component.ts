import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { ConsolidatedViewComponent } from '../consolidated-view/consolidated-view.component';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
  @Input() subLeaf:any;

  public editForm!:FormGroup;

  constructor(private noteCard:NoteCardComponent,
    private formBuilder :FormBuilder,
    private noteService: NotesService,
    private cView:ConsolidatedViewComponent){}
  
  ngOnInit() {
    this.editForm=this.formBuilder.group({
      title:[this.subLeaf.title],
      content:[this.subLeaf.content]
    })
}

  closePopup(){
    this.noteCard.show=false;
  }

  edit(subLeaf:any){
    this.noteService.editNote(subLeaf,this.editForm.value);
    this.noteCard.show=false;
    this.editForm.reset();
    this.cView.ngOnInit();
  }
}
