import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailoringB2bComponent } from './tailoring-b2b.component';

describe('TailoringB2bComponent', () => {
  let component: TailoringB2bComponent;
  let fixture: ComponentFixture<TailoringB2bComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TailoringB2bComponent]
    });
    fixture = TestBed.createComponent(TailoringB2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
