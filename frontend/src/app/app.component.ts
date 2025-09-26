
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Stagiaire } from './models/stagiaire.model';
import { StagiaireService } from './services/stagiaire.service';
import { ProjetService } from './services/projet.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StagiaireService,ProjetService]
})
export class AppComponent {
title = 'gestion de stages app';
constructor (private StagiaireService: StagiaireService){}
  
}
