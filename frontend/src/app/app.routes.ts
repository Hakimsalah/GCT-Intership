import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSComponent } from './FormStagiare/formstagiaire.component';
import { FormPComponent } from './FormProjet/formprojet.component';
import { FormStageComponent } from './form-stage/form-stage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponentComponent } from './reset-password-component/reset-password-component.component';
import { AvancementComponent } from './avancement/avancement.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AvanagentComponent } from './agent/avanagent/avanagent.component';
import { FormprojetagentComponent } from './agent/formprojetagent/formprojetagent.component';
import { FormstageagentComponent } from './agent/formstageagent/formstageagent.component';
import { StagiaireagentComponent } from './agent/stagiaireagent/stagiaireagent.component';




const routes: Routes = [
  {path:'stagiaire', component:FormSComponent},
  {path:'projet', component:FormPComponent},
  {path:'stage', component:FormStageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponentComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path:'stagiare', component:FormSComponent},
  {path:'projet', component:FormPComponent},
  {path:'stage', component:FormStageComponent},
  {path:'avancement',component:AvancementComponent},
  {path:'avanagent',component:AvanagentComponent},
  {path:'projetagent',component:FormprojetagentComponent},
  {path:'stageagent',component:FormstageagentComponent},
  {path:'sagent',component:StagiaireagentComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login' } // Handle unknown routes


];
@NgModule({
  imports: [RouterModule.forRoot(routes),NgxPaginationModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

