import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TailoringB2bComponent } from './pages/tailoring-b2b/tailoring-b2b.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'cases',
    loadChildren: () =>
      import('./pages/cases/cases.module').then((m) => m.CasesModule),
  },
  { path: 'tailoring-b2b', component: TailoringB2bComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
