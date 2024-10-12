import { Board } from "../board";
import { Figure } from "./Figure";
import { Position } from "../Position";

export type PawnAction = 
    | 'move' 
    | 'doubleMove' 
    | 'attackLeft' 
    | 'attackRight';

export class Pawn extends Figure {

    getValidMoves( board: Board): Position[] {
        throw new Error('Method not implemented.');
    }

    constructor(color: 'white' | 'black', position: Position) {
        super('Pawn', color, position);
    }

}
