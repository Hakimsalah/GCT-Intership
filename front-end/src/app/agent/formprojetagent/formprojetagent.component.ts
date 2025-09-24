import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Projet } from '../../models/projet.model';
import { ProjetService } from '../../services/projet.service';
import { ProjetagentComponent } from "../projetagent/projetagent.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../../header/header.component';
import { HeaderagentComponent } from "../../headeragent/headeragent.component";

@Component({
  selector: 'app-formprojetagent',
  standalone: true,
  imports: [ProjetagentComponent, HeaderComponent, CommonModule, ReactiveFormsModule, RouterLink, NgxPaginationModule, HeaderagentComponent],
  templateUrl: './formprojetagent.component.html',
  styleUrl: './formprojetagent.component.css'
})
export class FormprojetagentComponent {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addProjetButton') addProjetButton: any;
  page: number = 1;
  projetForm: FormGroup;
  projets: Projet[] = [];
  projetsToDisplay: Projet[] = [];
  domaineOptions = [
    "Intelligence Artificielle",
    "Système Embarqué",
    "Data Science",
    "Cybersécurité",
    "Réseaux et Télécommunications",
    "Développement Logiciel",
    "Big Data",
    "Cloud Computing",
    "Internet des Objets (IoT)",
];

  constructor(
    private fb: FormBuilder,
    private projetService: ProjetService
  ) {
    this.projetForm = fb.group({});
  }

  ngOnInit(): void {
    this.projetForm = this.fb.group({
      intitule: this.fb.control(''),
      description: this.fb.control(''),
      taches: this.fb.control(''),
      technologies:this.fb.control(''),
      domaine:this.fb.control('default'),
    });

    this.projetService.getProjets().subscribe((res) => {
      this.projets = res;
      this.projetsToDisplay = this.projets;
    });
  }

  ngAfterViewInit(): void {
    // Additional initialization if needed
  }

  setForm(projet: Projet) {
    this.Intitule.setValue(projet.intitule);
    this.Description.setValue(projet.description);
    this.Taches.setValue(projet.taches);
    this.Technologies.setValue(projet.technologies);
    this.Domaine.setValue(this.domaineOptions.indexOf(projet.domaine));
    this.fileInput.nativeElement.value = '';
  }

  searchProjets(event: any) {
    const searchKey = event.toLowerCase();
    this.projetsToDisplay = this.projets.filter(projet =>
      projet.intitule.toLowerCase().includes(searchKey)
    );
  }

  clearForm() {
    this.Intitule.setValue('');
    this.Description.setValue('');
    this.Taches.setValue('');
    this.Technologies.setValue('');
    this.Domaine.setValue('');
    this.fileInput.nativeElement.value = '';
  }

  
  
  get Intitule(): FormControl {
    return this.projetForm.get('intitule') as FormControl;
  }

  get Description(): FormControl {
    return this.projetForm.get('description') as FormControl;
  }

  get Taches(): FormControl {
    return this.projetForm.get('taches') as FormControl;
  }
  get Technologies(): FormControl {
    return this.projetForm.get('technologies') as FormControl;
  }
  get Domaine():FormControl{
    return this.projetForm.get('domaine') as FormControl;
  }
}




