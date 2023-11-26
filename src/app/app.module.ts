import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HomeComponent } from './home/home.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { HolyGrailLayoutComponent } from './holy-grail-layout/holy-grail-layout.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CounterComponent } from './counter/counter.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    FormValidationComponent,
    HomeComponent,
    TicTacToeComponent,
    TabsComponentComponent,
    HolyGrailLayoutComponent,
    ToDoListComponent,
    CounterComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
