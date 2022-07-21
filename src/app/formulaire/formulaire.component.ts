import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from './user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public user : user = new user (); 

  constructor() {}
  

  ngOnInit(): void {
  }
   
   public saveData(registerForm : NgForm) {
    console.log(registerForm.form)
    console.log('valeurs: ' , JSON.stringify(registerForm.form))
    console.log('hello')
    
   }
}
