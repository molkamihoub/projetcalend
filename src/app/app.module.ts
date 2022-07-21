import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
