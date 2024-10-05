import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PricelistComponent } from './components/pricelist/pricelist.component';
import { SolutionFlipCardComponent } from './components/solution-flip-card/solution-flip-card.component';

@NgModule({
  declarations: [
    PricelistComponent,
    SolutionFlipCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PricelistComponent,
      }
    ]),
  ]
})
export class ServicesModule { }
