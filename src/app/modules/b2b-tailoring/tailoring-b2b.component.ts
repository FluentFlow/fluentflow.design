import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';
import { A11y } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { interval, Subscription } from 'rxjs';

Swiper.use([A11y]);

@Component({
  selector: 'app-tailoring-b2b',
  templateUrl: './tailoring-b2b.component.html',
  styleUrls: ['./tailoring-b2b.component.scss']
})
export class TailoringB2bComponent implements OnDestroy {
  title = 'swiper-tutorial';
  swiper?: Swiper;
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;

  private swiperSubscription: Subscription | null = null;

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
    { title: "Эскиз", content: "Бесплатно разработаем концепт игрушки; посчитаем стоимость и сроки изготовления." },
    { title: "Прототип", content: "Мы производим демонастрационный прототип готовой продукции." },
    { title: "Правки", content: "На этом этапе мы вносим последние правки по вашим замечаниям, если такие есть." },
    { title: "Доставка", content: "Отправка по России через почту или СДЭК. В пределах Санкт-Петербурга - лично." }
  ]

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;

    // hack for swiper loop
    this.swiperSubscription = interval(5000)
      .subscribe(() => {
        if (this.swiper?.activeIndex === 4) {
          return this.swiper?.slideTo(0);
        }
        return this.swiper?.slideNext();
      });
  }

  ngOnDestroy() {
    this.swiperSubscription?.unsubscribe();
  }

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 1.0,
      },
      1024: {
        slidesPerView: 3.0,
      },
      1280: {
        slidesPerView: 3.0,
      },
    },
    observer: true,
    observeParents: true
  }
}
