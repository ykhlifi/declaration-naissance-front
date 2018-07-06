import { Hopital } from "../../models/hopital";
import { HopitalService } from "../../services/HopitalService";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.css']
})
export class HopitalComponent implements OnInit {


   motCle: string="";
  listHopitals:any;
  error:any;
  //enfantCourant : any = new Enfant();
  
  constructor(public hopitalService: HopitalService) { 
  
  }

  ngOnInit() {
 
  }
  
  listHopital(){
    this.reset
  this.hopitalService.listHopital()
    .subscribe(data =>{
      this.listHopitals = data;
      });
    console.log(this.listHopitals);
    
  }
  
  consulterEnfant(id :string) {
    this.reset
     this.hopitalService.consulterHopital(id)
    .subscribe(data =>{
      this.listHopitals = data;
      });
    console.log(this.listHopitals);
  }
  
  chercher(){
    this.reset();
    
    if (this.motCle){
      this.hopitalService.consulterHopital(this.motCle).subscribe(resp=> {
      console.log(resp);
      this.listHopitals = new Array<Hopital>();
      this.listHopitals.push(resp);
      }, error => {
        console.log(error);
        // error.status c'est le code de retour des exeption 
        if (error && error.status === 412){
        this.error='Hopital introuvable';
         }else {
          this.error == error;
         }
      });
    }
    else if (!this.motCle){
      this.hopitalService.listHopital().subscribe(data =>{
      this.listHopitals = data;
      }, error => {
        console.log(error);
        if (error && error.status === 412){
        this.error='Hopital introuvable';
         }else {
          this.error == error;
         }
      });
    console.log(this.listHopitals);
    }  
  }
  
  supprimer(id : string){
    this.reset
    this.hopitalService.supprimer(id).subscribe(res => {
      console.log(res);
      this.listHopital();
    },
      (error)=> {
        console.log(error);  
      }
    );
  }
    
  private reset(): void {
  this.error ==null;  
}
}

////////////////////////////////////////////////////////////////////////////////////////////
//
// listHopital:any;
//  private newsUrl = 'http://localhost:8080/hopitals';
//  constructor(public http:Http) { 
//  
//  }
//
//  ngOnInit() {
//     return this.http.get(this.newsUrl)
//    .map(resp =>resp= resp.json())
//    .subscribe(data =>{
//      this.  listHopital = data;
//      console.log(this.listHopital);});  
//  }