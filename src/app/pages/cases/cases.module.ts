import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { RouterModule } from '@angular/router';
import { CaseCardComponent } from './case-card/case-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CasesComponent, CaseCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CasesComponent,
      }
    ]),
  ],
})
export class CasesModule {}
