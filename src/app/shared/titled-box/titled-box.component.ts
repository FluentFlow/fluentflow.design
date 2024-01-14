import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titled-box',
  templateUrl: './titled-box.component.html',
  styleUrls: ['./titled-box.component.scss']
})
export class TitledBoxComponent {
  @Input() title = '';
}
