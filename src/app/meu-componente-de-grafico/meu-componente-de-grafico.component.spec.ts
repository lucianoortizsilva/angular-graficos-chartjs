import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponenteDeGraficoComponent } from './meu-componente-de-grafico.component';

describe('MeuComponenteDeGraficoComponent', () => {
  let component: MeuComponenteDeGraficoComponent;
  let fixture: ComponentFixture<MeuComponenteDeGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuComponenteDeGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuComponenteDeGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
