import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageagentComponent } from './stageagent.component';

describe('StageagentComponent', () => {
  let component: StageagentComponent;
  let fixture: ComponentFixture<StageagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StageagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
