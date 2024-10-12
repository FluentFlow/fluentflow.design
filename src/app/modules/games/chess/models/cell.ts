import { Figure } from "./figures/Figure";

export class Cell {
    figure: Figure | null;

    constructor(figure: Figure | null = null) {
        this.figure = figure;
    }
}
