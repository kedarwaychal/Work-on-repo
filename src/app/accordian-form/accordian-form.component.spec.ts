import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianFormComponent } from './accordian-form.component';

describe('AccordianFormComponent', () => {
  let component: AccordianFormComponent;
  let fixture: ComponentFixture<AccordianFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordianFormComponent]
    });
    fixture = TestBed.createComponent(AccordianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
