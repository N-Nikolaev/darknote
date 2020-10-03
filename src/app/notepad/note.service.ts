import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Note } from '../shared/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  apiURL: string = 'https://app-darknote.firebaseio.com/notes';

  noteSelected = new Subject<Note>();
  notesChanged = new Subject<Note[]>();

  private notes: Note[] = [];

  constructor(private http: HttpClient) {}

  getNote(): Note {
    return null;
  }

  getNotes(): Note[] {
    return this.notes.slice();
  }

  fetchNotes() {
    this.http
      .get<{ [key: string]: Note }>(`${this.apiURL}.json`)
      .pipe(
        map((notes) => {
          const notesArr: Note[] = [];
          for (const key in notes) {
            if (notes.hasOwnProperty(key)) {
              notesArr.push({ ...notes[key], id: key });
            }
          }
          return notesArr;
        })
      )
      .subscribe((notes) => {
        this.notes = notes;
        this.notesChanged.next(this.notes.slice());
      });
  }

  // --------------------------

  // CRUD commands via REST API
  // Create
  createNote(note: Note) {
    return this.http.post<{ name: string }>(`${this.apiURL}.json`, note);
  }

  // Read
  readNote(id: string) {
    return this.http
      .get<{ [key: string]: Note }>(`${this.apiURL}/${id}.json`)
      .pipe(
        map((note) => {
          return <Note>{ ...note, id: id };
        })
      );
  }

  // Update
  updateNote(note: Note): void {
    this.http
      .patch<{ [key: string]: Note }>(`${this.apiURL}/${note.id}.json`, note)
      .subscribe(() => {
        this.fetchNotes();
      });
  }

  // Delete
  deleteNote(id: string): void {
    this.http.delete(`${this.apiURL}/${id}.json`).subscribe(() => {
      this.fetchNotes();
    });
  }

  // ---------------------------

  del(): boolean {
    return confirm('Are you sure you want to delete this note?');
  }
}
