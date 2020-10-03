import { Component, OnInit } from '@angular/core';
import { Note } from '../../shared/note.model';

@Component({
  selector: 'app-notepad-list',
  templateUrl: './notepad-list.component.html',
  styleUrls: ['./notepad-list.component.sass'],
})
export class NotepadListComponent implements OnInit {
  notes: Note[];

  constructor() {}

  ngOnInit(): void {}

  onSelected(note: Note): void {}

  onDelete(id: string): void {}

  ngOnDestroy(): void {}
}
