import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorComponent } from './configurator.component';

describe('ConfiguratorComponent', () => {
  let component: ConfiguratorComponent;
  let fixture: ComponentFixture<ConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe activar un Test ', () => {

    component.activarTesting();
    expect(component.test).toBeTruthy();
  });

  it('debe mostrar mensaje si el test está desactivado', () => {

    component.desactivarTesting();
    expect(component.verificarTesting()).toContain('Testing desactivado');
  });

});
