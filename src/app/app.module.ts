import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotepadComponent } from './notepad/notepad.component';
import { NotepadViewComponent } from './notepad/notepad-view/notepad-view.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotepadComponent, NotepadViewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
