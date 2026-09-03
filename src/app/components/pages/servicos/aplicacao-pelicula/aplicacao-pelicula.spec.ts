import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacaoPelicula } from './aplicacao-pelicula';

describe('AplicacaoPelicula', () => {
  let component: AplicacaoPelicula;
  let fixture: ComponentFixture<AplicacaoPelicula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicacaoPelicula],
    }).compileComponents();

    fixture = TestBed.createComponent(AplicacaoPelicula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
