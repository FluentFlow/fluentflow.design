import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledBoxComponent } from './titled-box.component';

describe('TitledBoxComponent', () => {
  let component: TitledBoxComponent;
  let fixture: ComponentFixture<TitledBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitledBoxComponent]
    });
    fixture = TestBed.createComponent(TitledBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
