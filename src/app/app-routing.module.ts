import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HomeComponent } from './home/home.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { HolyGrailLayoutComponent } from './holy-grail-layout/holy-grail-layout.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CounterComponent } from './counter/counter.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'drag-drop', component:DragDropComponent },
  {path:'form', component:FormValidationComponent},
  {path:'tic-tac-toe', component:TicTacToeComponent},
  {path:'tabs',component:TabsComponentComponent},
  {path:'holy-grail', component:HolyGrailLayoutComponent},
  {path:'to-do', component:ToDoListComponent},
  {path:'counter', component:CounterComponent},
  {path:'progress-bar',component:ProgressBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
