import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplanTemplateComponent } from './dietplan-template.component';

describe('DietplanTemplateComponent', () => {
  let component: DietplanTemplateComponent;
  let fixture: ComponentFixture<DietplanTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietplanTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietplanTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
