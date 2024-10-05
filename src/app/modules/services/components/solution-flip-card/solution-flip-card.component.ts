import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../../services/models/Service';

@Component({
  selector: 'app-solution-flip-card',
  templateUrl: './solution-flip-card.component.html',
  styleUrls: ['./solution-flip-card.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      state('preview', style({
        transform: 'rotateY(0)'
      })),
      transition('active <=> preview', animate('500ms ease-in-out'))
    ])
  ]
})
export class SolutionFlipCardComponent implements OnInit {
  @Input() service!: Service;

  // State to track if the card is flipped
  flipState: 'preview' | 'active' = 'preview';

  constructor() { }

  ngOnInit() {
  }

  // Method to toggle the flip state
  toggleFlip() {
    this.flipState = this.flipState === 'preview' ? 'active' : 'preview';
  }
}