import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plotagem } from './plotagem';

describe('Plotagem', () => {
  let component: Plotagem;
  let fixture: ComponentFixture<Plotagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plotagem],
    }).compileComponents();

    fixture = TestBed.createComponent(Plotagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
