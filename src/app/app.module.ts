import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TailoringB2bComponent } from './pages/tailoring-b2b/tailoring-b2b.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, TailoringB2bComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
