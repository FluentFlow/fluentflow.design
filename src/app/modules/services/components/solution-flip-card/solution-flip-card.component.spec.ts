import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionFlipCardComponent } from './solution-flip-card.component';

describe('SolutionFlipCardComponent', () => {
  let component: SolutionFlipCardComponent;
  let fixture: ComponentFixture<SolutionFlipCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionFlipCardComponent]
    });
    fixture = TestBed.createComponent(SolutionFlipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
