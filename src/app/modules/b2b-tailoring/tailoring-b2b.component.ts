import { Component, ElementRef, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

Swiper.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-tailoring-b2b',
  templateUrl: './tailoring-b2b.component.html',
  styleUrls: ['./tailoring-b2b.component.scss']
})
export class TailoringB2bComponent {
  title = 'swiper-tutorial';
  swiper?: Swiper;
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;

  slides: Array<{ title: string, imageUrl: string }> = [
    {
      title: "Резитас",
      imageUrl: "https://s3.timeweb.cloud/1daee0b6-4b362c06-45a2-4fa0-b1aa-f30cd02cde29/fluentflow.design/images/cases/1.jpg"
    },
    {
      title: "Бесплатный автобус",
      imageUrl: "https://s3.timeweb.cloud/1daee0b6-4b362c06-45a2-4fa0-b1aa-f30cd02cde29/fluentflow.design/images/cases/2.jpg"
    },
    {
      title: "Gonzo Fellas",
      imageUrl: "https://s3.timeweb.cloud/1daee0b6-4b362c06-45a2-4fa0-b1aa-f30cd02cde29/fluentflow.design/images/cases/3.jpg"
    },
    {
      title: "Сибриская корона",
      imageUrl: "https://s3.timeweb.cloud/1daee0b6-4b362c06-45a2-4fa0-b1aa-f30cd02cde29/fluentflow.design/images/cases/4.jpg"
    },
    {
      title: "Баул",
      imageUrl: "https://s3.timeweb.cloud/1daee0b6-4b362c06-45a2-4fa0-b1aa-f30cd02cde29/fluentflow.design/images/cases/5.jpg"
    },
    {
      title: "Космонавт",
      imageUrl: "https://s3.timeweb.cloud/1daee0b6-4b362c06-45a2-4fa0-b1aa-f30cd02cde29/fluentflow.design/images/cases/6.jpg"
    },
    {
      title: "Птички!",
      imageUrl: "https://s3.timeweb.cloud/1daee0b6-4b362c06-45a2-4fa0-b1aa-f30cd02cde29/fluentflow.design/images/cases/7.jpg"
    }
  ]

  steps: Array<{ title: string, content: string }> = [
    { title: "Фото", content: "Мы бесплатно поможем Вам разработать концепт игрушки и просчитаем стоимость и сроки изготовления" },
    { title: "Оплата", content: "Мы закупаем материалы и делаем одну штуку штуку готовой продукции. На этом этапе мы вносим последние правки по вашим замечаниям, если такие есть." },
    { title: "Доставка", content: "Мы доделываем партию и отправляем вам любым удобным Вам способом (почта России, СДЭК, пр.) Если вы находитесь в пределах Санкт-Петербурга, то привезём лично." }
  ]

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 4,
    breakpoints: {
      320: {
        slidesPerView: 1.0,
      },
      1024: {
        slidesPerView: 3.0,
      },
      1280: {
        slidesPerView: 4.0,
      },
    },
    observer: true,
    observeParents: true,
  }
}
