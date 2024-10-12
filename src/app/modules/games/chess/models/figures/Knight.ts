import { Board } from "../board";
import { Figure } from "../figures/Figure";
import { Position } from "../Position";


export class Knight extends Figure {
    constructor(color: 'white' | 'black', position: Position) {
        super('Knight', color, position);
    }

    getValidMoves(board: Board): Position[] {
        return [];
    }
}
