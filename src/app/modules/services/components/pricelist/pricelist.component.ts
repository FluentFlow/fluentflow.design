import { Component } from '@angular/core';
import { Service } from '../../models/Service';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent {
  services: Service[] = [
    {
      name: 'Дизайн',
      imageUrl: 'https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'State-of-the-art diagnostics to accurately identify vehicle issues.',
    },
    {
      name: 'Разработка',
      imageUrl: 'https://images.unsplash.com/photo-1687462970787-61d953508926?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Engine overhauls to brake replacements, we ensure high-quality work for your vehicle’s longevity.',
    },
    {
      name: 'Maintenance',
      imageUrl: 'https://images.unsplash.com/photo-1635437536607-b8572f443763?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Oil changes, tire rotations, and more to enhance performance and prevent future issues.',
    }
  ];
}
