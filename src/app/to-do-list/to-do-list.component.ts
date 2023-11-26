import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  listForm:FormGroup
  tasks:any[] = []
  constructor(private fb : FormBuilder){
    this.listForm = this.fb.group({
      todo: ''
    })
  }

  addTodo(){
    const todoVal = this.listForm.value.todo
    this.tasks.push(todoVal)
    this.listForm.reset()
  }

  removeTask(task:any){
    this.tasks = this.tasks.filter(tas => tas !== task)
  }
}
