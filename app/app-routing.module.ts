import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  { path:'welcome', component:WelcomepageComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule], 
  providers: [] 
}) 
export class AppRoutingModule { } 
