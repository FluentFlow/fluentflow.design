import { Component, Input } from '@angular/core';
import { Link } from "../models/Link";

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.scss']
})
export class CaseCardComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() link!: Link;
}
