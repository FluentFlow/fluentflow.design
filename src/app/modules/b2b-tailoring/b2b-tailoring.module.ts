import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailoringB2bComponent } from './tailoring-b2b.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  declarations: [TailoringB2bComponent, CalculatorComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TailoringB2bComponent,
      }
    ]),
    DirectivesModule
  ],
  // For using custom html elements like swiper js
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class B2bTailoringModule { }
