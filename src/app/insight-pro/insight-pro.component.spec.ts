import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightProComponent } from './insight-pro.component';

describe('InsightProComponent', () => {
  let component: InsightProComponent;
  let fixture: ComponentFixture<InsightProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
