import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotepadComponent } from './notepad/notepad.component';
import { NotepadViewComponent } from './notepad/notepad-view/notepad-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { NotepadListComponent } from './notepad/notepad-list/notepad-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotepadComponent,
    NotepadViewComponent,
    NotepadListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutosizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
