import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGallaryComponent } from './image-gallary.component';

describe('ImageGallaryComponent', () => {
  let component: ImageGallaryComponent;
  let fixture: ComponentFixture<ImageGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageGallaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
