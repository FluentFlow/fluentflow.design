import { Component } from '@angular/core';
import { Board } from '../models/board';
import { Figure } from '../models/figures/Figure';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent {
  board: Board;
  cells: (Figure | null)[][];

  constructor() {
    this.board = new Board();
    this.cells = this.initializeCells();
  }

  private initializeCells(): (Figure | null)[][] {
    return [
      [this.board.A8, this.board.B8, this.board.C8, this.board.D8, this.board.E8, this.board.F8, this.board.G8, this.board.H8],
      [this.board.A7, this.board.B7, this.board.C7, this.board.D7, this.board.E7, this.board.F7, this.board.G7, this.board.H7],
      [this.board.A6, this.board.B6, this.board.C6, this.board.D6, this.board.E6, this.board.F6, this.board.G6, this.board.H6],
      [this.board.A5, this.board.B5, this.board.C5, this.board.D5, this.board.E5, this.board.F5, this.board.G5, this.board.H5],
      [this.board.A4, this.board.B4, this.board.C4, this.board.D4, this.board.E4, this.board.F4, this.board.G4, this.board.H4],
      [this.board.A3, this.board.B3, this.board.C3, this.board.D3, this.board.E3, this.board.F3, this.board.G3, this.board.H3],
      [this.board.A2, this.board.B2, this.board.C2, this.board.D2, this.board.E2, this.board.F2, this.board.G2, this.board.H2],
      [this.board.A1, this.board.B1, this.board.C1, this.board.D1, this.board.E1, this.board.F1, this.board.G1, this.board.H1],
    ];
  }

  onCellClick(x: number, y: number): void {
    // Обработка клика по ячейке, если нужно
  }
}
