import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
counter:number = 0;
timerId: any

startCounter(){
  this.timerId = setInterval(()=>{
    this.counter++
  },1000)
}

stopCounter(){
  clearInterval(this.timerId)
  this.counter = 0;
}
}
