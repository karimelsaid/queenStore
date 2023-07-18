import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewarihFabricComponent } from './sewarih-fabric.component';

describe('SewarihFabricComponent', () => {
  let component: SewarihFabricComponent;
  let fixture: ComponentFixture<SewarihFabricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SewarihFabricComponent]
    });
    fixture = TestBed.createComponent(SewarihFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
