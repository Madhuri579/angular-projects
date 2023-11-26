import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  progressValue:any = 0
  boxWidth = 100

  startProgress(){
    const intervalId = setInterval(()=>{
      this.progressValue += 5;
      if(this.progressValue > 100){
        clearInterval(intervalId)
      } 
    },1000)
  }

  toggleWidth() {
    console.log("toogle")
    this.boxWidth = this.boxWidth === 100 ? 200 : 100;
  }
}
