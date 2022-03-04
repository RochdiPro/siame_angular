import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work/work.component';
import {ConfigComponent} from './config/config.component';
const routes: Routes = [
   { path: '', loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule) },

  { path: 'connexion', loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule) },
  { path: 'work', component: WorkComponent },
  { path: 'config', component: ConfigComponent },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
