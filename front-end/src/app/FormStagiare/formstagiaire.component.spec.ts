
import { FormSComponent } from '../FormStagiare/formstagiaire.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('RegisterComponent', () => {
  let component: FormSComponent;
  let fixture: ComponentFixture<FormSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});