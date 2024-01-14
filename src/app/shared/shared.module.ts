import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsPanelComponent } from './icons-panel/icons-panel.component';
import { BrandBannerComponent } from './brand-banner/brand-banner.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { AdaptiveTextComponent } from './adaptive-text/adaptive-text.component';
import { ExternalLinkComponent } from './external-link/external-link.component';
import { IconsModule } from '../icons/icons.module';
import { CollapseComponent } from './collapse/collapse.component';
import { TitledBoxComponent } from './titled-box/titled-box.component';

@NgModule({
  declarations: [
    IconsPanelComponent,
    BrandBannerComponent,
    ChatMessageComponent,
    AdaptiveTextComponent,
    ExternalLinkComponent,
    CollapseComponent,
    TitledBoxComponent,
  ],
  imports: [CommonModule, IconsModule],
  exports: [
    IconsPanelComponent,
    BrandBannerComponent,
    AdaptiveTextComponent,
    ExternalLinkComponent,
    CollapseComponent,
    TitledBoxComponent
  ],
})
export class SharedModule {}
