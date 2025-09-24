import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Stagiaire } from '../../models/stagiaire.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sagent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sagent.component.html',
  styleUrl: './sagent.component.css'
})
export class SagentComponent {
  @Input() stagiaire!: Stagiaire;
  @Output() onRemoveStagiaire = new EventEmitter<number>();
  @Output() onEditStagiaire = new EventEmitter<number>();
  @Output() closeDetails = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log(this.stagiaire);
  }

  deleteStagiaireClicked() {
    this.onRemoveStagiaire.emit(this.stagiaire.id!);
  }

  editStagiaireClicked() {
    this.onEditStagiaire.emit(this.stagiaire.id!);
  }
  onClose(): void {
    this.closeDetails.emit();
  }

  printStagiaire() {
    const stagiaireElement = this.el.nativeElement.querySelector('.stagiaire-container');
    stagiaireElement.classList.add('print-only');
    document.querySelectorAll('.stagiaire-container').forEach((element) => {
      if (element !== stagiaireElement) {
        element.classList.add('no-print');
      }
    });
    window.print();
    stagiaireElement.classList.remove('print-only');
    document.querySelectorAll('.stagiaire-container').forEach((element) => {
      element.classList.remove('no-print');
    });
  }
}
