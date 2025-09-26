
import { FormPComponent } from '../FormProjet/formprojet.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('RegisterComponent', () => {
  let component: FormPComponent;
  let fixture: ComponentFixture<FormPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});