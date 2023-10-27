import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons-panel',
  templateUrl: './icons-panel.component.html',
  styleUrls: ['./icons-panel.component.scss']
})
export class IconsPanelComponent {
  @Input() vk: string | undefined;
  @Input() telegram: string | undefined;
  @Input() github: string | undefined;
  @Input() behance: string | undefined;
}
