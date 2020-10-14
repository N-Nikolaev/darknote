import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../../shared/note.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notepad-list',
  templateUrl: './notepad-list.component.html',
  styleUrls: ['./notepad-list.component.sass'],
})
export class NotepadListComponent implements OnInit, OnDestroy {
  notes: Note[];
  private noteChangeSub: Subscription;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.fetchNotes();
    this.notes = this.noteService.getNotes();
    this.noteChangeSub = this.noteService.notesChanged.subscribe(
      (notes: Note[]) => {
        this.notes = notes;
      }
    );
  }

  onSelected(note: Note): void {
    this.noteService.noteSelected.next(note);
  }

  onDelete(id: string): void {
    event.stopPropagation();
    if (this.noteService.del()) {
      this.noteService.deleteNote(id);
    }
  }

  ngOnDestroy(): void {
    this.noteChangeSub.unsubscribe();
  }
}
