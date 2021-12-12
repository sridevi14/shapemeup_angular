import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPaymentHistoryComponent } from './client-payment-history.component';

describe('ClientPaymentHistoryComponent', () => {
  let component: ClientPaymentHistoryComponent;
  let fixture: ComponentFixture<ClientPaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPaymentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
