import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartVideoComponent } from './start-video.component';

describe('StartVideoComponent', () => {
  let component: StartVideoComponent;
  let fixture: ComponentFixture<StartVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartVideoComponent]
    });
    fixture = TestBed.createComponent(StartVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
