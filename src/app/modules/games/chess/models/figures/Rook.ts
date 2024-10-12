import { Board } from "../board";
import { Figure } from "./Figure";
import { Position } from "../Position";

export class Rook extends Figure {
    constructor(color: 'white' | 'black', position: Position) {    
        super('Rook', color, position);
    }

    getValidMoves( board: Board): Position[] {
        throw new Error('Method not implemented.');
    }
}
