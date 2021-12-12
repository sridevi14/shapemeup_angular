import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDemographicsComponent } from './client-demographics.component';

describe('ClientDemographicsComponent', () => {
  let component: ClientDemographicsComponent;
  let fixture: ComponentFixture<ClientDemographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDemographicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
