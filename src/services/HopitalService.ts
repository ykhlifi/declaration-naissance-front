/**
 * New typescript file
 */
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";


@Injectable()
export class HopitalService{
  
  private baseUrl = "http://localhost:7777/";
  //private baseUrl = "http://192.168.1.58:7777/";
  
  constructor(public http:Http){}
   
   // service de consultation d'un extrait de naissance
  
   consulterHopital(id: string){
   return this.http.get(this.baseUrl + "/consultHopital/"+id)
    .map(resp =>resp= resp.json())
   }
  
  listHopital(){
 return this.http.get(this.baseUrl + "/hopitals")
    .map(resp =>resp= resp.json())
  }
  
  supprimer(id: string){
    return this.http.delete(this.baseUrl + "/supprimeHopital/"+id)
    .map(resp =>resp= resp.json())
   }
}
