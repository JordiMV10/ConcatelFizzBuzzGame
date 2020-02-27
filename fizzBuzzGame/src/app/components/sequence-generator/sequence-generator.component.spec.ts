import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceGeneratorComponent } from './sequence-generator.component';

describe('SequenceGeneratorComponent', () => {
  let component: SequenceGeneratorComponent;
  let fixture: ComponentFixture<SequenceGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceGeneratorComponent);
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

  it('debe mostrar mensaje si el test está activado', () => {

    component.activarTesting();
    expect(component.verificarTesting()).toContain('Testing activado');
  });
});
