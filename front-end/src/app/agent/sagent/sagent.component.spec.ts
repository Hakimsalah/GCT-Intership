import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagentComponent } from './sagent.component';

describe('SagentComponent', () => {
  let component: SagentComponent;
  let fixture: ComponentFixture<SagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
