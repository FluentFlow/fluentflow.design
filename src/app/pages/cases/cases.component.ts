import { Component } from '@angular/core';
import { Case } from './models/case';
import { CasesDataService } from './services/casesdata.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {
  public Cases: Case[] = [];
  constructor(private casesDataService: CasesDataService) {
    this.Cases = this.casesDataService.getAvailableCases();
  }
}
