import { Board } from "../board";
import { Position } from "../Position";

export abstract class Figure {
    name: string;
    color: 'white' | 'black';
    imageUrl: string;
    private _position: Position;

    /**
     * Constructor for a chess figure
     *
     * @param name name of the figure
     * @param color color of the figure
     * @param position position of the figure on the board
     */
    constructor(name: string, color: 'white' | 'black', position: Position) {
    
        this.name = name;
        this.color = color;
        this.imageUrl = this.getImageUrl();
        this._position = position;
    }

    private getImageUrl(): string {
        return `assets/images/chess-pieces/${this.color}-${this.name.toLowerCase()}.png`;
    }

    get position(): Position {
        return this._position;
    }

    set position(newPosition: Position) {
        this._position = newPosition;
    }

    abstract getValidMoves(board: Board): Position[];

    getY = (): number => ({
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
    }[this.position.column]);

    getX = (): number => this.position.row - 1;
}
