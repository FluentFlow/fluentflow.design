import { Injectable } from '@angular/core';
import { Case } from '../models/case';
import { Link } from "../models/Link";

@Injectable({
  providedIn: 'root',
})
export class CasesDataService {
  private availableCases: { id: string; case: Case }[] = [
    { id: 'resitas', case: new ResitasCase() },
    { id: 'museum', case: new MuseumCase() },
  ];

  getCase(id: string | null): Case {
    return this.availableCases.find((c) => c.id === id)?.case ?? new TestCase();
  }

  getAvailableCases(): Case[] {
    return this.availableCases.map((c) => c.case);
  }

  constructor() {}
}

class ResitasCase implements Case {
  id: string = 'resitas';
  name: string = 'Игрушка Испанец Хохотун';
  description: string = 'Дизайн и пошив игрушки';
  image: string = 'assets/images/cases/resitas/preview.png';
  link: Link = {
    url: 'https://vk.com/wall-221513139_10',
    text: 'Читать в ВК',
  }
}

class MuseumCase implements Case {
  id: string = 'museum';
  name: string = 'Музей сюрреализма';
  description: string = 'Разработка концепта музея сюрреализма. Проработка цвета, сетки, типографики, основных экранов и мобильного вида.';
  image: string = 'assets/images/cases/museum/preview.png';
  link: Link = {
    url: 'https://vk.com/@fluentflow-koncept-dlya-muzeya-surrealizma',
    text: 'Читать в ВК',
  }
}

class TestCase implements Case {
  id: string = 'test';
  name: string = 'Тестовый Кейс';
  description: string = 'Описание тестового кейса';
  image: string = '';
  link: Link = {
    url: '',
    text: '',
  }
}
