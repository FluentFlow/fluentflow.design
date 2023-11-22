import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramIconComponent } from './telegram-icon.component';

describe('TelegramIconComponent', () => {
  let component: TelegramIconComponent;
  let fixture: ComponentFixture<TelegramIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelegramIconComponent]
    });
    fixture = TestBed.createComponent(TelegramIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
