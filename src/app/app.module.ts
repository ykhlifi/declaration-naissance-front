import { EnfantService } from "../services/EnfantService";
import { HopitalService } from "../services/HopitalService";
import { DeclarantService } from "../services/declarantService";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeclarantComponent } from './declarant/declarant.component';
import { HttpModule } from "@angular/http";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { EnfantComponent } from './enfant/enfant.component';
import { HopitalComponent } from './hopital/hopital.component';
import { FormsModule } from "@angular/forms";
import { AddEnfantComponent } from './add-enfant/add-enfant.component';

const appRoutes:Routes=[
//pour créer les chemain
  {path: 'listDeclarant' , component: DeclarantComponent},
  {path: 'listEnfant' , component: EnfantComponent},
  {path: 'listHopital' , component: HopitalComponent},
  {path: '', redirectTo: '/listEnfant', pathMatch :'full'},
  {path: 'ajouterEnfant' , component: AddEnfantComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    DeclarantComponent,
    EnfantComponent,
    HopitalComponent,
    AddEnfantComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),HttpModule,FormsModule
    //forRoot pour indiquer les routes principales utiliser
  ],
  providers: [EnfantService, DeclarantService, HopitalService],
  bootstrap: [AppComponent]
})
export class AppModule { }


