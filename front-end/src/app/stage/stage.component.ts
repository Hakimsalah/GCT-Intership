import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stage } from '../models/stage.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Stagiaire } from '../models/stagiaire.model';
import { Projet } from '../models/projet.model';

@Component({
  selector: 'app-stage',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css'],
})
export class StageComponent implements OnInit {

  @Input() stage!: Stage;
  @Output() onRemoveStage = new EventEmitter<number>();
  @Output() onEditStage = new EventEmitter<number>();
  @Output() closeDetails = new EventEmitter<void>();

  constructor(private el: ElementRef) {}


  ngOnInit(): void {
  
    if (!this.stage.stagiaire) {
      this.stage.stagiaire = new Stagiaire();
    }
    if (!this.stage.projet) {
      this.stage.projet = new Projet();
    }
    console.log(this.stage);
  }
  

  deleteStageClicked() {
    this.onRemoveStage.emit(this.stage.id!);
  }

  editStageClicked(){
    this.onEditStage.emit(this.stage.id!);
  }
  printStage() {
    const stageElement = this.el.nativeElement.querySelector('.stage-container');
    stageElement.classList.add('print-only');
    document.querySelectorAll('.stage-container').forEach((element) => {
      if (element !== stageElement) {
        element.classList.add('no-print');
      }
    });
    window.print();
    stageElement.classList.remove('print-only');
    document.querySelectorAll('.stage-container').forEach((element) => {
      element.classList.remove('no-print');
    });
  }

  onClose(): void {
    this.closeDetails.emit();
  }
}
