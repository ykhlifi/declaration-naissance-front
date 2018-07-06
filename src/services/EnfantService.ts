/**
 * New typescript file
 */
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Enfant } from "../models/Enfant";


@Injectable()
export class EnfantService{
  
 private baseUrl = "http://localhost:7777/";
 //private baseUrl = "http://192.168.1.58:7777/";
  constructor(public http:Http){}
   
   // service de consultation d'un extrait de naissance
  
   consulterEnfant(id: number){
   return this.http.get(this.baseUrl + "/consultEnfant/"+id)
    .map(resp =>resp= resp.json())
   }
  
  listEnfant(){
 return this.http.get(this.baseUrl + "/enfants")
    .map(resp =>resp= resp.json())
  }
  
  supprimer(id: number){
    return this.http.delete(this.baseUrl + "/supprimeEnfant/"+id)
    .map(resp =>resp= resp.json())
   }

   ajouterEnfant(n: Enfant){
    //return  this.http.post(this.baseUrl + "/declarerNouveauNe")
    // .map(resp =>resp= resp.json())
   }
}
