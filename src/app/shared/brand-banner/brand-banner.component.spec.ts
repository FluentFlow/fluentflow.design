import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBannerComponent } from './brand-banner.component';

describe('BrandBannerComponent', () => {
  let component: BrandBannerComponent;
  let fixture: ComponentFixture<BrandBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandBannerComponent]
    });
    fixture = TestBed.createComponent(BrandBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
