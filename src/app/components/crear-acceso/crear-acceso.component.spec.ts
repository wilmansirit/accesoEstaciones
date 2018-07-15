import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAccesoComponent } from './crear-acceso.component';

describe('CrearAccesoComponent', () => {
  let component: CrearAccesoComponent;
  let fixture: ComponentFixture<CrearAccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
