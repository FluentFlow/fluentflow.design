import { ChessColumn } from "./ChessColumn";
import { ChessRow } from "./ChessRow";

export class Position {
    constructor(public readonly row: ChessRow, public readonly column: ChessColumn) {}
}

