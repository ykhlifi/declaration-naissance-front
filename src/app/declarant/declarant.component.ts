/**
 * New typescript file
 */
//import { Declarant } from "../../models/Declarant";
import { Declarant } from "../../models/Declarant";
import { DeclarantService } from "../../services/declarantService";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declarant',
  templateUrl: './declarant.component.html',
  styleUrls: ['./declarant.component.css']
})
export class DeclarantComponent implements OnInit {
  
  motCle: string=" ";
  listDeclarants:any;
  error:any;
  //enfantCourant : any = new Enfant();
  
  constructor(public declarantService: DeclarantService) { 
  
  }

  ngOnInit() {
 
  }

  listDeclarant(){
    this.reset;
  this.declarantService.listDeclarant()
    .subscribe(data =>{
      this.listDeclarants = data;
      });
    console.log(this.listDeclarants);
    
  }
  
  consulterDeclarant(id:string) {
    this.reset;
     this.declarantService.consulterDeclarant(id)
    .subscribe(data =>{
      this.listDeclarants = data;
      });
    console.log(this.listDeclarants);
  }
  
  chercher(){
    this.reset;
    if (this.motCle !==" "){
      this.declarantService.consulterDeclarant(this.motCle).subscribe(resp=> {
      console.log(resp);
      this.listDeclarants = new Array<Declarant>();
      this.listDeclarants.push(resp);
      },(error) => {
        console.log(error);
        if (error && error.status === 412) {
          this.error = 'Declarant introuvable.';
        } else {
          this.error = error;
        }
      });
    }
    else if (this.motCle ===" ") {
      this.declarantService.listDeclarant()
    .subscribe(data =>{
      this.listDeclarants = data;
      },(error) => {
        console.log(error);
        this.error = error;
      });
    console.log(this.listDeclarants);
    
    }
  }
  
  // subscribe c'est de se mettre en ecoute pour chaque chargement effectuer 
  supprimer(id :string){
    this.reset;
    this.declarantService.supprimer(id).subscribe(res => {
      console.log(res);
      this.listDeclarant();
    },
      (error)=> {
        
      }
    );
  }
  // pour remettre a zéro la variable error
  private reset(): void {
    this.error = null;
  }
}


