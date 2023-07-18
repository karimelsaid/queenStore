import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesFabricComponent } from './types-fabric.component';

describe('TypesFabricComponent', () => {
  let component: TypesFabricComponent;
  let fixture: ComponentFixture<TypesFabricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesFabricComponent]
    });
    fixture = TestBed.createComponent(TypesFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
