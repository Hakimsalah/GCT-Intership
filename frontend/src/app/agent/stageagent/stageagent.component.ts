import { Component, Input, OnInit } from '@angular/core';
import { Stage } from '../../models/stage.model';
import { Stagiaire } from '../../models/stagiaire.model';
import { Projet } from '../../models/projet.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stageagent',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './stageagent.component.html',
  styleUrl: './stageagent.component.css'
})
export class StageagentComponent implements OnInit {

  @Input() stage!: Stage;
  

  constructor() {}

  ngOnInit(): void {
  
    if (!this.stage.stagiaire) {
      this.stage.stagiaire = new Stagiaire();
    }
    if (!this.stage.projet) {
      this.stage.projet = new Projet();
    }
    console.log(this.stage);
  }
  printThisPage(){
    window.print();
  }
  
 
}
