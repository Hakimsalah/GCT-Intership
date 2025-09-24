import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Projet } from '../../models/projet.model';
import { ProjetService } from '../../services/projet.service';
import { Stage } from '../../models/stage.model';
import { Stagiaire } from '../../models/stagiaire.model';
import { StageService } from '../../services/stage.service';
import { StagiaireService } from '../../services/stagiaire.service';
import { StageagentComponent } from "../stageagent/stageagent.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../../header/header.component';
import { HeaderagentComponent } from "../../headeragent/headeragent.component";

@Component({
  selector: 'app-formstageagent',
  standalone: true,
  imports: [StageagentComponent, CommonModule, ReactiveFormsModule, HeaderComponent, RouterLink, NgxPaginationModule, HeaderagentComponent],
  templateUrl: './formstageagent.component.html',
  styleUrl: './formstageagent.component.css'
})
export class FormstageagentComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addStageButton') addStageButton: any;
  title = 'StageCRUD';
  stageForm: FormGroup;
  stages: Stage[] = [];
  stagesToDisplay: Stage[] = [];
  stagiairesOptions: Stagiaire[] = [];
  projetsOptions: Projet[] = [];
  stage!: Stage;
  page: number = 1;

  constructor(
    private fb: FormBuilder,
    private stageService: StageService,
    private stagiaireService: StagiaireService,
    private projetService: ProjetService
  ) {
    this.stageForm = this.fb.group({
      titre: [''],
      description: [''],
      dateDebut: [''],
      dateFin: [''],
      stagiaire: [null],
      projet: [null],
      evaluations:[null]
      
    });
  }

  ngOnInit(): void {
    this.stageForm = this.fb.group({
      titre: this.fb.control(''),
      description: this.fb.control(''), // Assurez-vous que ce champ est bien initialisé
      dateDebut: this.fb.control(''),
      dateFin: this.fb.control(''),
      stagiaire: this.fb.control(''), // Stagiaire formControl
      projet: this.fb.control(''), // Projet formControl
      evaluations:this.fb.control(''),
    });
  
    this.stageService.getStages().subscribe((res) => {
      this.stages = res;
      this.stagesToDisplay = this.stages;
    });
  
    this.stagiaireService.getStagiaires().subscribe((res) => {
      this.stagiairesOptions = res;
    });
  
    this.projetService.getProjets().subscribe((res) => {
      this.projetsOptions = res;
    });
  }

  ngAfterViewInit(): void {
    // Méthode pour effectuer des actions après le rendu de la vue
  }

  setForm(stage: Stage) {
    this.Titre.setValue(stage.titre);
    this.Description.setValue(stage.description); // Assurez-vous que la description est bien assignée
    this.DateDebut.setValue(stage.dateDebut);
    this.DateFin.setValue(stage.dateFin);
    this.Stagiaire.setValue(stage.stagiaire); // Assurez-vous que l'objet stagiaire complet est assigné
    this.Projet.setValue(stage.projet); // Assurez-vous que l'objet projet complet est assigné
    this.fileInput.nativeElement.value = '';
  }

  searchStages(event: any) {
    const searchKey = event.toLowerCase();
    this.stagesToDisplay = this.stages.filter(stage =>
      (stage.titre).toLowerCase().includes(searchKey)
    );
  }

  clearForm() {
    this.Titre.setValue('');
    this.Description.setValue('');
    this.DateDebut.setValue('');
    this.DateFin.setValue('');
    this.Stagiaire.setValue('');
    this.Projet.setValue('');
    this.fileInput.nativeElement.value = '';
  }

  
  get Titre(): FormControl {
    return this.stageForm.get('titre') as FormControl;
  }

  get Description(): FormControl {
    return this.stageForm.get('description') as FormControl;
  }

  get DateDebut(): FormControl {
    return this.stageForm.get('dateDebut') as FormControl;
  }

  get DateFin(): FormControl {
    return this.stageForm.get('dateFin') as FormControl;
  }

  get Stagiaire(): FormControl {
    return this.stageForm.get('stagiaire') as FormControl;
  }

  get Projet(): FormControl {
    return this.stageForm.get('projet') as FormControl;
  }
  get Evaultion(): FormControl{
    return this.stageForm.get('evaluation')as FormControl;
  }
}

