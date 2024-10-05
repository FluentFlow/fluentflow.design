import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailoringB2bComponent } from './tailoring-b2b.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [TailoringB2bComponent, CalculatorComponent, OrderComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TailoringB2bComponent,
        data: {
          breadcrumb: {
            label: 'Пошив на заказ',
            link: 'b2b-tailoring',
            icon: 'fas fa-tshirt'
          },
        }
      }
    ]),
    DirectivesModule
  ],
  // For using custom html elements like swiper js
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class B2bTailoringModule { }