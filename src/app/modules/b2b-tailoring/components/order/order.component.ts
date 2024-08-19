import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-order',
  template: '<div #formContainer></div>',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @ViewChild('formContainer', { static: true }) formContainer!: ElementRef;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    var formScript = this.renderer.createElement('script');
    formScript.setAttribute('data-b24-form', 'inline/10/rvt3wk');
    formScript.setAttribute('async', 'true');
    formScript.setAttribute('src', 'https://cdn-ru.bitrix24.ru/b28345682/crm/form/loader_10.js');
    this.renderer.appendChild(this.formContainer?.nativeElement, formScript);
    formScript.addEventListener('load', () => {
      this.disableHeaderPadding();
    });
  }

  /**
   * Disables the header padding of the Bitrix24 form after a short delay.
   *
   * @return {void} No return value.
   */
  disableHeaderPadding(): void {
    setTimeout(() => {
      var headerPadding = this.elRef.nativeElement.querySelector('.b24-form-header-padding');
      if (!headerPadding) {
        this.disableHeaderPadding();
      }
      else {
        headerPadding.style.display = 'none';
      }
    }, 100);
  }
}
