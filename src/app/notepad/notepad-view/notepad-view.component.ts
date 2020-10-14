import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoteService } from '../note.service';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-notepad-view',
  templateUrl: './notepad-view.component.html',
  styleUrls: ['./notepad-view.component.sass'],
})
export class NotepadViewComponent implements OnInit {
  noteForm: FormGroup;
  note: Note;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.setNote();
    this.noteForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
    this.noteService.noteSelected.subscribe((note: Note) => {
      this.note = note;
      this.noteForm.setValue({
        title: this.note.title,
        content: this.note.content,
      });
    });
  }

  onDelete(): void {
    if (this.note.id !== null) {
      this.noteService.deleteNote(this.note.id);
      this.note.id = null;
    }
    this.noteForm.reset();
    this.setNote();
  }

  onNew(): void {
    const newNote = confirm('Do you want to create a new note?');
    if (newNote) {
      this.noteForm.reset();
      this.setNote();
    }
  }

  onSave(note: Note): void {
    this.note.title = note.title;
    this.note.content = note.content;
    this.note.date = new Date().toString();

    // Checks if form is emptied and creates a new note instead
    if (!(this.note.title || this.note.content)) {
      this.note.id = null;
    }

    if (this.note.id !== null) {
      this.noteService.updateNote(this.note);
    } else {
      this.noteService.createNote(this.note).subscribe((res) => {
        this.note.id = res.name;
        this.noteService.fetchNotes();
      });
    }
  }

  private setNote(): void {
    this.note = {
      title: null,
      content: null,
      date: null,
      id: null,
    };
  }
}
