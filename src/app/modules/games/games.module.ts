import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessComponent } from './chess/chess.component';
import { ChessBoardComponent } from './chess/chess-board/chess-board.component';
import { ChessCellComponent } from './chess/chess-cell/chess-cell.component';



@NgModule({
  declarations: [
    ChessComponent,
    ChessBoardComponent,
    ChessCellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
