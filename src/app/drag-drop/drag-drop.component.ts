import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
tasks: string[] = ['Task1','Task2','Task4','Task5']
taskGroups: string[] = ['To Do', 'In Progress', 'Review', 'Ready To Test', 'Testing', 'Done' ]
currentTask: any;
constructor(){

}

onDragStart(eve:any, item:any){
  eve.dataTransfer.setData('text', eve.target.id)
}

onDrop(eve:any){
  let elem = eve.dataTransfer.getData('text')
  eve.target.appendChild(document.getElementById(elem))
}

allowDrop(eve:any){
  eve.prevantDefault()
}

}
