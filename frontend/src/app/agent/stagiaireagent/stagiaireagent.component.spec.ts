import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireagentComponent } from './stagiaireagent.component';

describe('StagiaireagentComponent', () => {
  let component: StagiaireagentComponent;
  let fixture: ComponentFixture<StagiaireagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagiaireagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagiaireagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
