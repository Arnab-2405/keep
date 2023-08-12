import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  getNotes(){
    return this.http.get('http://localhost:3000/data');
  }

  addNotes(data:any){
    this.http.post('http://localhost:3000/data',data).subscribe();
  }

  deleteNotes(leaf :any){
    this.http.delete(`http://localhost:3000/data/${leaf.id}`).subscribe();
  }

  editNote(leaf :any,data :any){
    this.http.patch(`http://localhost:3000/data/${leaf.id}`,data).subscribe();
  }
}
