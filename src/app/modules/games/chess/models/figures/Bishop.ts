import { Figure } from "./Figure";
import { Board } from "../board";
import { Position } from "../Position";


export class Bishop extends Figure {
    constructor(color: 'white' | 'black', position: Position) {
        super('Bishop', color, position);
    }

    getValidMoves(board: Board): Position[] {
        throw new Error('Method not implemented.');
    }
}
