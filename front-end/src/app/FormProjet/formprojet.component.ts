import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet.service';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ProjetComponent } from '../projet/projet.component';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-formp',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ProjetComponent, ReactiveFormsModule, RouterLink,NgxPaginationModule],
  templateUrl: './formprojet.component.html',
  styleUrls: ['./formprojet.component.css'],
})
export class FormPComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addProjetButton') addProjetButton: any;
  isEditMode: boolean = false;
  editingProjetId: number | null = null;
  page: number = 1;
  projetForm: FormGroup;
  projets: Projet[] = [];
  selectedProjet: Projet | null = null;

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

  addProjet() {
    const projet: Projet = {
      id: 0, // Ensure to handle ID appropriately in your backend
      intitule: this.Intitule.value,
      description: this.Description.value,
      taches: this.Taches.value,
      technologies:this.Technologies.value,
      domaine:this.domaineOptions[parseInt(this.Domaine.value)],
      profile: this.fileInput.nativeElement.files[0]?.name,
    };
    if (this.isEditMode) {
      // Update existing stagiaire
      this.projetService.updateProjet(projet.id!, projet).subscribe((res) => {
        // Update the local array with the edited stagiaire
        const index = this.projets.findIndex(s => s.id === projet.id);
        if (index > -1) {
          this.projets[index] = res;
        }
        this.projetsToDisplay = this.projets;
        this.clearForm();
        this.isEditMode = false; // Reset the flag
        this.editingProjetId = null; // Reset the editing ID
      });
    } else {
    this.projetService.postProjet(projet).subscribe((res) => {
      this.projets.unshift(res);
      this.projetsToDisplay = this.projets;
      this.clearForm();
    });}
  }

  editProjet(event: number) {
    const ProjetToEdit = this.projets.find((val) => val.id === event);
  
    if (ProjetToEdit) {
      this.setForm(ProjetToEdit);
      this.isEditMode = true;
      this.editingProjetId = ProjetToEdit.id ?? null; // Convert undefined to null
      this.addProjetButton.nativeElement.click();
    }
  }

  removeProjet(id: number) {
    this.projetService.deleteProjet(id).subscribe(() => {
      this.projets = this.projets.filter(projet => projet.id !== id);
      this.projetsToDisplay = this.projets;
    });
  }

  setForm(projet: Projet) {
    this.Intitule.setValue(projet.intitule);
    this.Description.setValue(projet.description);
    this.Taches.setValue(projet.taches);
    this.Technologies.setValue(projet.technologies);
    this.Domaine.setValue(this.domaineOptions.indexOf(projet.domaine));
   
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
    this.isEditMode = false;
    this.editingProjetId = null;
  }
  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchProjets(filterValue);
  }
  showDetails(projet: Projet) {
    this.selectedProjet = projet;
  }
  closeDetails(): void {
    this.selectedProjet = null;
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
