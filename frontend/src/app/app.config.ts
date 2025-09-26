import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';


import { FormSComponent } from './FormStagiare/formstagiaire.component';
import { FormPComponent } from './FormProjet/formprojet.component';
import { HeaderComponent } from './header/header.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { ProjetComponent } from './projet/projet.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
   AppComponent,
  

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

   
    
  ],

 
  providers: [],
  bootstrap: [AppComponent]
  

})
export class AppModule { }

