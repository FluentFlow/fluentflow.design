import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-resitas-redirect',
  template: ''
})
class ResitasRedirectComponent {
  redirectLink: string = 'https://vk.com/wall-221513139_10';
}

@NgModule({
  declarations: [
    AboutComponent,
    ContactUsComponent,
    MainComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: MainComponent },
      {
        path: 'rechitas',
        component: ResitasRedirectComponent
      },
    ]),
  ],
})
export class MainModule {}



