import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaServico } from './pagina-servico';

describe('PaginaServico', () => {
  let component: PaginaServico;
  let fixture: ComponentFixture<PaginaServico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaServico],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaServico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
