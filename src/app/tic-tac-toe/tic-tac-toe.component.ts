import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {
  cells: string[][] = [['','',''],['','',''],['','','']]
  secondPlayer: boolean = false
  boardCells: string[] = new Array(9).fill('')

  handleInput(ri:any,ci:any):void{
    if(!this.cells[ri][ci]){
      if(this.secondPlayer){
        this.cells[ri][ci] = 'O'
      } else{
        this.cells[ri][ci] = 'X'
      }
   //   this.checkForWinner()
    }
    this.secondPlayer = !this.secondPlayer
  }

  handleBoardInput(ind:any){
      if(!this.boardCells[ind]){
        if(this.secondPlayer){
          this.boardCells[ind] = 'O'
        } else {
          this.boardCells[ind] = 'X'
        }
        this.checkForWinner()
      }
      this.secondPlayer = !this.secondPlayer
  }

  checkForWinner():void{
    const winPatterns: number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for(const pattern in winPatterns){
     
    }
  }
}
