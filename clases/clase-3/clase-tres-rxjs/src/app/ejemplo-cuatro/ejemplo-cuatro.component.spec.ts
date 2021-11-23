import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploCuatroComponent } from './ejemplo-cuatro.component';

describe('EjemploCuatroComponent', () => {
  let component: EjemploCuatroComponent;
  let fixture: ComponentFixture<EjemploCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploCuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
