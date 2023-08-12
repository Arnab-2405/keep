import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { ConsolidatedViewComponent } from '../consolidated-view/consolidated-view.component';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent {
  panelOpenState = false;
  public AddNoteForm! :FormGroup;

  constructor(private formBuilder :FormBuilder,
    private cView :ConsolidatedViewComponent,
    private noteService:NotesService){}

  ngOnInit(){
    this.AddNoteForm=this.formBuilder.group({
      title :[''],
      content :['']
    })
  }

  addNote(){   
    this.noteService.addNotes(this.AddNoteForm.value);
    this.AddNoteForm.reset();
    this.cView.ngOnInit();
  }
}
