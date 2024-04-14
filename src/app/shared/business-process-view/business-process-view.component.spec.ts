import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProcessViewComponent } from './business-process-view.component';

describe('BusinessProcessViewComponent', () => {
  let component: BusinessProcessViewComponent;
  let fixture: ComponentFixture<BusinessProcessViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessProcessViewComponent]
    });
    fixture = TestBed.createComponent(BusinessProcessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
