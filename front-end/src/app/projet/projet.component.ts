import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Projet } from '../models/projet.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css'],
})
export class ProjetComponent implements OnInit {
  @Input() projet!: Projet;
  @Output() onRemoveProjet = new EventEmitter<number>();
  @Output() onEditProjet = new EventEmitter<number>();
  @Output() closeDetails = new EventEmitter<void>();

  constructor(private el: ElementRef) {}


  ngOnInit(): void {
    console.log(this.projet);
  }
  printThisPage(){
    window.print();
  }
  deleteProjetClicked() {
    this.onRemoveProjet.emit(this.projet.id!);
  }

  editProjetClicked() {
    this.onEditProjet.emit(this.projet.id!);
  }
  printProjet() {
    const projetElement = this.el.nativeElement.querySelector('.projet-container');
    projetElement.classList.add('print-only');
    document.querySelectorAll('.projet-container').forEach((element) => {
      if (element !== projetElement) {
        element.classList.add('no-print');
      }
    });
    window.print();
    projetElement.classList.remove('print-only');
    document.querySelectorAll('.projet-container').forEach((element) => {
      element.classList.remove('no-print');
    });
  }

  onClose(): void {
    this.closeDetails.emit();
  }
}
