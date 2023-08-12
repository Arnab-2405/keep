import { Component, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { ConsolidatedViewComponent } from '../consolidated-view/consolidated-view.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {

  @Input()leaf:any;

  show =false;

  constructor(private notesService :NotesService,
    private cView:ConsolidatedViewComponent){}

  del(leaf :any){
    this.notesService.deleteNotes(leaf);
    this.cView.ngOnInit();
  }

  showPopup(){
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.show=!this.show
  }
}
