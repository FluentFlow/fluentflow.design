import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adaptive-text',
  templateUrl: './adaptive-text.component.html',
  styleUrls: ['./adaptive-text.component.scss']
})
export class AdaptiveTextComponent {
  @Input() title!: string;
}
