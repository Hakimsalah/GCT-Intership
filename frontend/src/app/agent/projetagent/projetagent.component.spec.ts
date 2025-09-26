import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetagentComponent } from './projetagent.component';

describe('ProjetagentComponent', () => {
  let component: ProjetagentComponent;
  let fixture: ComponentFixture<ProjetagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
