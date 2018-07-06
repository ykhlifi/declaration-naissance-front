import { Http } from "@angular/http";
import { Injectable } from "@angular/core";


@Injectable()
export class DeclarantService{
  
  private baseUrl = "http://localhost:7777/";
 // private baseUrl = "http://192.168.1.58:7777/";
  
  constructor(public http:Http){}
   
   // service de consultation d'un declarant
  
   consulterDeclarant(id: string){
   return this.http.get(this.baseUrl+"/consultDeclarant/"+id)
    .map(resp =>resp= resp.json())
   }
   // service de recup�rer la liste des declarants
  listDeclarant(){
 return this.http.get(this.baseUrl + "/declarants")
    .map(resp =>resp= resp.json())
  }
  
  supprimer(id: string){
    return this.http.delete(this.baseUrl + "/supprimeDeclarant/"+id)
    .map(resp =>resp= resp.json())
   }
  
}