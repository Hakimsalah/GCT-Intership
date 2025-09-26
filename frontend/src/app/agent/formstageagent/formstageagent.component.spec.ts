import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstageagentComponent } from './formstageagent.component';

describe('FormstageagentComponent', () => {
  let component: FormstageagentComponent;
  let fixture: ComponentFixture<FormstageagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormstageagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormstageagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
