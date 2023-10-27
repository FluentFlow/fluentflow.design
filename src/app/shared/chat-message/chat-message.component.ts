import { Component, Input } from '@angular/core';

export type ChatMessageDirection = 'start' | 'end';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent {
  @Input() direction: ChatMessageDirection = 'start';
  @Input() image!: string;
  @Input() background?: string;
}
