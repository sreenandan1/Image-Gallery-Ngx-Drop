import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenDialogComponent } from './full-screen-dialog.component';

describe('FullScreenDialogComponent', () => {
  let component: FullScreenDialogComponent;
  let fixture: ComponentFixture<FullScreenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullScreenDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


