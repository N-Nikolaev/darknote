import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-notepad-view',
  templateUrl: './notepad-view.component.html',
  styleUrls: ['./notepad-view.component.sass'],
})
export class NotepadViewComponent implements OnInit {
  noteForm: FormGroup;
  note: Note;

  constructor() {}

  ngOnInit(): void {
    this.setNote();
    this.noteForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
  }

  onDelete(): void {}

  onNew(): void {}

  onSave(note: Note): void {}

  private setNote(): void {
    this.note = {
      title: null,
      content: null,
      date: null,
      id: null,
    };
  }
}
