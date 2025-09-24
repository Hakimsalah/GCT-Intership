import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormprojetagentComponent } from './formprojetagent.component';

describe('FormprojetagentComponent', () => {
  let component: FormprojetagentComponent;
  let fixture: ComponentFixture<FormprojetagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormprojetagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormprojetagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
