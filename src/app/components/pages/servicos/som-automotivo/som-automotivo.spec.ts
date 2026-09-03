import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomAutomotivo } from './som-automotivo';

describe('SomAutomotivo', () => {
  let component: SomAutomotivo;
  let fixture: ComponentFixture<SomAutomotivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomAutomotivo],
    }).compileComponents();

    fixture = TestBed.createComponent(SomAutomotivo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
