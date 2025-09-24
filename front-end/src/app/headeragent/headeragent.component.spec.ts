import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderagentComponent } from './headeragent.component';

describe('HeaderagentComponent', () => {
  let component: HeaderagentComponent;
  let fixture: ComponentFixture<HeaderagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
