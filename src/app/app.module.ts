import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { DirectivesModule } from './directives/directives.module';
import { B2bTailoringModule } from './modules/b2b-tailoring/b2b-tailoring.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    IconsModule,
    B2bTailoringModule,
    DirectivesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // For using custom html elements like swiper js
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
