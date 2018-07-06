import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../../services/EnfantService';
import { Enfant } from '../../models/Enfant';

@Component({
  selector: 'app-add-enfant',
  templateUrl: './add-enfant.component.html',
  styleUrls: ['./add-enfant.component.css']
})
export class AddEnfantComponent implements OnInit {

  constructor(public enfantService: EnfantService) { }

  ngOnInit() {
  }

  ajouterEnfant(n:Enfant){

  }
 
}
