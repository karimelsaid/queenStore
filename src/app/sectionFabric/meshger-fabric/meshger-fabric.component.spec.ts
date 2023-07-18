import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshgerFabricComponent } from './meshger-fabric.component';

describe('MeshgerFabricComponent', () => {
  let component: MeshgerFabricComponent;
  let fixture: ComponentFixture<MeshgerFabricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeshgerFabricComponent]
    });
    fixture = TestBed.createComponent(MeshgerFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
