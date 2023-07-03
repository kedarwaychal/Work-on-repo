import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianpanelComponent } from './accordianpanel.component';

describe('AccordianpanelComponent', () => {
  let component: AccordianpanelComponent;
  let fixture: ComponentFixture<AccordianpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordianpanelComponent]
    });
    fixture = TestBed.createComponent(AccordianpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
