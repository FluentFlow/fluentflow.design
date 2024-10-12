import { Figure } from './figures/Figure';
import { King } from "./figures/King";
import { Queen } from "./figures/Queen";
import { Bishop } from "./figures/Bishop";
import { Knight } from "./figures/Knight";
import { Rook } from "./figures/Rook";
import { Pawn } from "./figures/Pawn";
import { Position } from './Position';

export class Board {
    A1: Figure | null = new Rook('white', new Position(1, 'a'));
    B1: Figure | null = new Knight('white', new Position(1, 'b'));
    C1: Figure | null = new Bishop('white', new Position(1, 'c'));
    D1: Figure | null = new Queen('white', new Position(1, 'd'));
    E1: Figure | null = new King('white', new Position(1, 'e'));
    F1: Figure | null = new Bishop('white', new Position(1, 'f'));
    G1: Figure | null = new Knight('white', new Position(1, 'g'));
    H1: Figure | null = new Rook('white', new Position(1, 'h'));

    A2: Figure | null = new Pawn('white', new Position(2, 'a'));
    B2: Figure | null = new Pawn('white', new Position(2, 'b'));
    C2: Figure | null = new Pawn('white', new Position(2, 'c'));
    D2: Figure | null = new Pawn('white', new Position(2, 'd'));
    E2: Figure | null = new Pawn('white', new Position(2, 'e'));
    F2: Figure | null = new Pawn('white', new Position(2, 'f'));
    G2: Figure | null = new Pawn('white', new Position(2, 'g'));
    H2: Figure | null = new Pawn('white', new Position(2, 'h'));

    A3: Figure | null = null;
    B3: Figure | null = null;
    C3: Figure | null = null;
    D3: Figure | null = null;
    E3: Figure | null = null;
    F3: Figure | null = null;
    G3: Figure | null = null;
    H3: Figure | null = null;

    A4: Figure | null = null;
    B4: Figure | null = null;
    C4: Figure | null = null;
    D4: Figure | null = null;
    E4: Figure | null = null;
    F4: Figure | null = null;
    G4: Figure | null = null;
    H4: Figure | null = null;

    A5: Figure | null = null;
    B5: Figure | null = null;
    C5: Figure | null = null;
    D5: Figure | null = null;
    E5: Figure | null = null;
    F5: Figure | null = null;
    G5: Figure | null = null;
    H5: Figure | null = null;

    A6: Figure | null = null;
    B6: Figure | null = null;
    C6: Figure | null = null;
    D6: Figure | null = null;
    E6: Figure | null = null;
    F6: Figure | null = null;
    G6: Figure | null = null;
    H6: Figure | null = null;

    A7: Figure | null = new Pawn('black', new Position(7, 'a'));
    B7: Figure | null = new Pawn('black', new Position(7, 'b'));
    C7: Figure | null = new Pawn('black', new Position(7, 'c'));
    D7: Figure | null = new Pawn('black', new Position(7, 'd'));
    E7: Figure | null = new Pawn('black', new Position(7, 'e'));
    F7: Figure | null = new Pawn('black', new Position(7, 'f'));
    G7: Figure | null = new Pawn('black', new Position(7, 'g'));
    H7: Figure | null = new Pawn('black', new Position(7, 'h'));

    A8: Figure | null = new Rook('black', new Position(8, 'a'));
    B8: Figure | null = new Knight('black', new Position(8, 'b'));
    C8: Figure | null = new Bishop('black', new Position(8, 'c'));
    D8: Figure | null = new Queen('black', new Position(8, 'd'));
    E8: Figure | null = new King('black', new Position(8, 'e'));
    F8: Figure | null = new Bishop('black', new Position(8, 'f'));
    G8: Figure | null = new Knight('black', new Position(8, 'g'));
    H8: Figure | null = new Rook('black', new Position(8, 'h'));
}
