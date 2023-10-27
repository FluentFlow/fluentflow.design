import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveTextComponent } from './adaptive-text.component';

describe('AdaptiveTextComponent', () => {
  let component: AdaptiveTextComponent;
  let fixture: ComponentFixture<AdaptiveTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdaptiveTextComponent]
    });
    fixture = TestBed.createComponent(AdaptiveTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
