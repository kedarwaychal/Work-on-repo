import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordiantabComponent } from './accordiantab.component';

describe('AccordiantabComponent', () => {
  let component: AccordiantabComponent;
  let fixture: ComponentFixture<AccordiantabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordiantabComponent]
    });
    fixture = TestBed.createComponent(AccordiantabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
