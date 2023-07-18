import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbayatFabricComponent } from './abayat-fabric.component';

describe('AbayatFabricComponent', () => {
  let component: AbayatFabricComponent;
  let fixture: ComponentFixture<AbayatFabricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbayatFabricComponent]
    });
    fixture = TestBed.createComponent(AbayatFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
