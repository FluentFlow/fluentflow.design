import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkIconComponent } from './vk-icon.component';

describe('VkIconComponent', () => {
  let component: VkIconComponent;
  let fixture: ComponentFixture<VkIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VkIconComponent]
    });
    fixture = TestBed.createComponent(VkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
