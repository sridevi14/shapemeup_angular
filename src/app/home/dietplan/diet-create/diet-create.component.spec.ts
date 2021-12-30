import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietCreateComponent } from './diet-create.component';

describe('DietCreateComponent', () => {
  let component: DietCreateComponent;
  let fixture: ComponentFixture<DietCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
