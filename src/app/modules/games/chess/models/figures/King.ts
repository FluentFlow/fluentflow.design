
import { Board } from "../board";
import { Position } from "../Position";
import { Figure } from "./Figure";


export class King extends Figure {
    override getValidMoves(board: Board): Position[] {
        throw new Error("Method not implemented.");
    }
    constructor(color: 'white' | 'black', position: Position) {
        super('King', color, position);
    }

    
}
