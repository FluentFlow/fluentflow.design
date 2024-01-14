import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MainComponent } from './views/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // Simple components
    ItemListComponent,
    // Views
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
      }
    ]),
  ]
})
export class ShopModule { }
