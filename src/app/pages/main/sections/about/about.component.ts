import { Component } from '@angular/core';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  icons:{
    vk: string | undefined;
    telegram: string | undefined;
    github: string | undefined;
    behance: string | undefined;
  }
}

const FluentFlowLink: string = 'https://t.me/fluentflow';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Филипп Куксов',
      role: 'Основатель',
      image: 'assets/images/team/filipp.jpg',
      icons: {
        vk: 'https://vk.com/vectorfield',
        telegram: 'https://t.me/vectorfield4',
        github: 'https://github.com/Vectorfield4',
        behance: undefined
      }
    },
    {
      name: 'Ярослав Заводчиков',
      role: 'Руководитель производства',
      image: 'assets/images/team/yaroslav.jpg',
      icons: {
        vk: 'https://vk.com/id142377027',
        telegram: FluentFlowLink, // todo: need link
        github: undefined,
        behance: undefined,
      }
    },
    {
      name: 'Александр Никаноров',
      role: 'UI\\UX дизайнер',
      image: 'assets/images/team/alexander.jpg',
      icons: {
        vk: undefined,
        telegram: 'https://t.me/coldhoned',
        github: 'https://github.com/qlefia',
        behance: 'https://www.behance.net/voidaberration'
      }
    }

  ]
}
