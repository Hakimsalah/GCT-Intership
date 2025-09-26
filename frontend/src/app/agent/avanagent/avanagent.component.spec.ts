import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanagentComponent } from './avanagent.component';

describe('AvanagentComponent', () => {
  let component: AvanagentComponent;
  let fixture: ComponentFixture<AvanagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvanagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvanagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
