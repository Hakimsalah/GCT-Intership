import { Evaluation } from "./Evaluation.model";
import { Projet } from "./projet.model";
import { Stagiaire } from "./stagiaire.model";


export class Stage {
[x: string]: any;
  id!: number;
  titre!: string;
  description!: string;
  dateDebut: Date = new Date();
  dateFin: Date = new Date();
  stagiaire!: Stagiaire;
  projet!: Projet;
  profile: string = '';
  evaluations: Evaluation[]=[];
}
