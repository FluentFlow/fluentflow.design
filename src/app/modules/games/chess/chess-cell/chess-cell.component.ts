import { Component, Input } from '@angular/core';
import { Figure } from '../models/figures/Figure';

@Component({
  selector: 'app-chess-cell',
  templateUrl: './chess-cell.component.html',
  styleUrls: ['./chess-cell.component.scss']
})
export class ChessCellComponent {
  @Input() figure: Figure | null = null;

  get imageUrl(): string {
    return this.figure ? this.figure.imageUrl : '';
  }

  get isEmpty(): boolean {
    return this.figure === null;
  }
}
