import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempForms } from './temp-forms';

describe('TempForms', () => {
  let component: TempForms;
  let fixture: ComponentFixture<TempForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
