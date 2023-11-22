import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubIconComponent } from './github-icon/github-icon.component';
import { ShareIconComponent } from './share-icon/share-icon.component';
import { TelegramIconComponent } from './telegram-icon/telegram-icon.component';
import { VkIconComponent } from './vk-icon/vk-icon.component';

@NgModule({
  declarations: [
    GithubIconComponent,
    ShareIconComponent,
    TelegramIconComponent,
    VkIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    GithubIconComponent,
    ShareIconComponent,
    TelegramIconComponent,
    VkIconComponent,
  ],
})
export class IconsModule {}
