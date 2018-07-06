import { Enfant } from "../../models/Enfant";
import { EnfantService } from "../../services/EnfantService";
import { Component, OnInit } from '@angular/core';
//*****************************************************************************
// operateur map c'est pour convertir le donn�es re�u en format json :resp =>resp= resp.json()  
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  
  /*NouveauNe(String nom, String prenom, String sexe, Date datenaissance, Date datedeclarant,
      String heurenaissance, String hopital, String declarant)*/
  
  motCle: number;
  listEnfants:any;
  
  error: any;
  //enfantCourant : any = new Enfant();
  
  constructor(public enfantService: EnfantService) { 
  
  }

  ngOnInit() {
 
  }

  listEnfant(){
    this.reset();
    
  this.enfantService.listEnfant()
    .subscribe(data =>{
      this.listEnfants = data;
      });
    console.log(this.listEnfants);
    
  }
  
  consulterEnfant(id :number) {
    this.reset();
    
     this.enfantService.consulterEnfant(id)
    .subscribe(data =>{
      this.listEnfants = data;
      });
    console.log(this.listEnfants);
  }
  
  supprimer(id :number){
    this.enfantService.supprimer(id).subscribe(res => {
      console.log(res);
      this.listEnfant();
    },
      (error)=> {
        
      }
    );
  }
  
  
  chercher(){
    this.reset();
    if (this.motCle) {
      this.enfantService.consulterEnfant(this.motCle).subscribe(resp=> {
      console.log(resp);
      this.listEnfants = new Array<Enfant>();
      this.listEnfants.push(resp);
      },
      (error) => {
        console.log(error);
        if (error && error.status === 412) {
          this.error = 'Enfant introuvable.';
        } else {
          this.error = error;
        }
      });
    }
    else {
      this.enfantService.listEnfant().subscribe(data =>{
        this.listEnfants = data;
        console.log(this.listEnfants);
      },
      (error) => {
        console.log(error);
        this.error = error;
      });
    }  
  }
  // pour remettre a z�ro la variable error
  private reset(): void {
    this.error = null;
  }
  
}
