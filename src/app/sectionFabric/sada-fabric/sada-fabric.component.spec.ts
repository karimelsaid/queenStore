import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadaFabricComponent } from './sada-fabric.component';

describe('SadaFabricComponent', () => {
  let component: SadaFabricComponent;
  let fixture: ComponentFixture<SadaFabricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadaFabricComponent]
    });
    fixture = TestBed.createComponent(SadaFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
