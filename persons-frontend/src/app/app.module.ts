import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPersonsComponent } from './pages/register-persons/register-persons.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    NavbarComponent,
    RegisterPersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
