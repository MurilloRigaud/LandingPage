import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rastreadores } from './rastreadores';

describe('Rastreadores', () => {
  let component: Rastreadores;
  let fixture: ComponentFixture<Rastreadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rastreadores],
    }).compileComponents();

    fixture = TestBed.createComponent(Rastreadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
