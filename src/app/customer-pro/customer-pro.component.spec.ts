import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProComponent } from './customer-pro.component';

describe('CustomerProComponent', () => {
  let component: CustomerProComponent;
  let fixture: ComponentFixture<CustomerProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
