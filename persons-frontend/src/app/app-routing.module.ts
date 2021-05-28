import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './pages/persons/persons.component';
import { RegisterPersonsComponent } from './pages/register-persons/register-persons.component';

const routes: Routes = [  
  { path: 'register-persons'    , component: RegisterPersonsComponent},
{path: 'persons' , component: PersonsComponent},
{path: '**', redirectTo:'register-persons'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
