import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkIconComponent } from './icons/vk-icon/vk-icon.component';
import { TelegramIconComponent } from './icons/telegram-icon/telegram-icon.component';
import { IconsPanelComponent } from './icons-panel/icons-panel.component';
import { ShareIconComponent } from './icons/share-icon/share-icon.component';
import { BrandBannerComponent } from './brand-banner/brand-banner.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { AdaptiveTextComponent } from './adaptive-text/adaptive-text.component';

@NgModule({
  declarations: [VkIconComponent, TelegramIconComponent, IconsPanelComponent, ShareIconComponent, BrandBannerComponent, ChatMessageComponent, AdaptiveTextComponent],
  imports: [CommonModule],
  exports: [IconsPanelComponent, VkIconComponent, TelegramIconComponent, ShareIconComponent, BrandBannerComponent, AdaptiveTextComponent],
})
export class SharedModule {}
