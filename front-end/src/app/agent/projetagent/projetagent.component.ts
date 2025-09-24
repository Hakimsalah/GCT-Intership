import { Component, Input } from '@angular/core';
import { Projet } from '../../models/projet.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projetagent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projetagent.component.html',
  styleUrl: './projetagent.component.css'
})
export class ProjetagentComponent {
  @Input() projet!: Projet;
  

  ngOnInit(): void {
    console.log(this.projet);
  }
  printThisPage(){
    window.print();
  }
}


