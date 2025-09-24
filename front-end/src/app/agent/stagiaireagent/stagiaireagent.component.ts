import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Stagiaire } from '../../models/stagiaire.model';
import { StagiaireService } from '../../services/stagiaire.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../../header/header.component';
import { StagiaireComponent } from '../../stagiaire/stagiaire.component';
import { HeaderagentComponent } from "../../headeragent/headeragent.component";
import { SagentComponent } from "../sagent/sagent.component";

@Component({
  selector: 'app-stagiaireagent',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule, RouterLink, NgxPaginationModule, HeaderagentComponent, SagentComponent],
  templateUrl: './stagiaireagent.component.html',
  styleUrl: './stagiaireagent.component.css'
})
export class StagiaireagentComponent implements OnInit, AfterViewInit{
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addStagiaireButton') addStagiaireButton: any;
  page: number = 1;
  title = 'StagiaireCRUD';
  stagiaireForm: FormGroup;
  selectedStagiaire: Stagiaire | null = null;

  stagiaires: Stagiaire[] = [];
  stagiairesToDisplay: Stagiaire[] = [];
  educationOptions = [
    'Licence',
    'Cycle ingénieur',
    'Master',
    'Doctorat',
    'BTS ',
  ];

  etablissementOptions = [
    'École nationale d ingénieurs de Tunis (ENIT)',
    'École nationale des sciences de l informatique(ENSI)',
    'Institut International de Technologie (IIT)',
    'École nationale d ingénieurs de Sfax (ENIS)',
    'École nationale d électronique et des télécommunications de Sfax (ENETcom) ',
    'l Institut supérieur d informatique et de multimédia de Sfax (ISIMS)',
  ];

  constructor(
    private fb: FormBuilder,
    private stagiaireService: StagiaireService
  ) {
    this.stagiaireForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.stagiaireForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      numTel: this.fb.control(''),
      adresse: this.fb.control(''),
      email: this.fb.control(''),
      education: this.fb.control('default'),
      etablissement: this.fb.control('default'),
      cin: this.fb.control(''),
    });

    this.stagiaireService.getStagiaires().subscribe((res) => {
      this.stagiaires = res;
      this.stagiairesToDisplay = this.stagiaires;
    });
  }

  ngAfterViewInit(): void {}

  addStagiaire() {
    let stagiaire: Stagiaire = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      numTel: this.NumTel.value,
      email: this.Email.value,
      adresse: this.Adresse.value,
      education: this.educationOptions[parseInt(this.Education.value)],
      etablissement: this.etablissementOptions[parseInt(this.Etablissement.value)],
      cin: this.Cin.value,
      profile: this.fileInput.nativeElement.files[0]?.name,
    };

    this.stagiaireService.postStagiaire(stagiaire).subscribe((res) => {
      this.stagiaires.unshift(res);
      this.stagiairesToDisplay = this.stagiaires;
      this.clearForm();
    });
  }

  removeStagiaire(event: number) {
    this.stagiaires.forEach((val, index) => {
      if (val.id === event) {
        this.stagiaireService.deleteStagiaire(event).subscribe(() => {
          this.stagiaires.splice(index, 1);
          this.stagiairesToDisplay = this.stagiaires;
        });
      }
    });
  }

  editStagiaire(event: number) {
    this.stagiaires.forEach((val) => {
      if (val.id === event) {
        this.setForm(val);
      }
    });
    this.removeStagiaire(event);
    this.addStagiaireButton.nativeElement.click();
  }

  setForm(stagiaire: Stagiaire) {
    this.FirstName.setValue(stagiaire.firstname);
    this.LastName.setValue(stagiaire.lastname);
    this.NumTel.setValue(stagiaire.numTel);
    this.Adresse.setValue(stagiaire.adresse);
    this.Email.setValue(stagiaire.email);
    this.Education.setValue(this.educationOptions.indexOf(stagiaire.education));
    this.Etablissement.setValue(this.etablissementOptions.indexOf(stagiaire.etablissement));
    this.Cin.setValue(stagiaire.cin);
    this.fileInput.nativeElement.value = '';
  }

  searchStagiaires(event: any) {
    let filteredStagiaires: Stagiaire[] = [];

    if (event === '') {
      this.stagiairesToDisplay = this.stagiaires;
    } else {
      filteredStagiaires = this.stagiaires.filter((val) => {
        let targetKey = val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.stagiairesToDisplay = filteredStagiaires;
    }
  }

  clearForm() {
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.NumTel.setValue('');
    this.Adresse.setValue('');
    this.Email.setValue('');
    this.Education.setValue('');
    this.Etablissement.setValue('');
    this.Cin.setValue('');
    this.fileInput.nativeElement.value = '';
  }
  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchStagiaires(filterValue);
  }
  showDetails(stagiaire: Stagiaire) {
    this.selectedStagiaire = stagiaire;
  }
  closeDetails(): void {
    this.selectedStagiaire = null;
  }
  printThisPage(){
    window.print();
  }
  public get FirstName(): FormControl {
    return this.stagiaireForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.stagiaireForm.get('lastname') as FormControl;
  }
  public get NumTel(): FormControl {
    return this.stagiaireForm.get('numTel') as FormControl;
  }

  public get Adresse(): FormControl {
    return this.stagiaireForm.get('adresse') as FormControl;
  }

  public get Email(): FormControl {
    return this.stagiaireForm.get('email') as FormControl;
  }
  
  public get Education(): FormControl {
    return this.stagiaireForm.get('education') as FormControl;
  }
  public get Etablissement(): FormControl {
    return this.stagiaireForm.get('etablissement') as FormControl;
  }
  public get Cin(): FormControl {
    return this.stagiaireForm.get('cin') as FormControl;
  }
}


