import { Board } from "../board";
import { Figure } from "./Figure";
import { Position } from "../Position";

export class Queen extends Figure {
    constructor(color: 'white' | 'black', position: Position) {
        super('Queen', color, position);
    }

    getValidMoves( board: Board): Position[] {
        throw new Error('Method not implemented.');
    }
}
