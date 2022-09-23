import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistroModel } from 'src/app/models/registro.model';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm!: FormGroup;

  invalido = false;
  
  automoviles: RegistroModel[] = [];
  automovil!: RegistroModel;

  t1=0;
  t2=0;
  t1tot=0;
  t2tot=0;
  A=0;
  B=0;
  C=0;


  constructor(private fb: FormBuilder) {
    this.crearForm();
  }

  ngOnInit(): void {
  }

  crearForm(){
    this.registroForm = this.fb.group({
      id: ['', [Validators.required]],
      turno: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    });
  }

  guardar(){

    if(this.registroForm.invalid){
      this.invalido = true;
      console.log(this.invalido);
      return;
    }

    this.invalido = false;
    

    let registro = {
      id: this.registroForm.controls['id'].value,
      turno: this.registroForm.controls['turno'].value,
      categoria: this.registroForm.controls['categoria'].value,
    };

    this.automoviles.push(registro);
    this.registroForm.reset();

    if ( registro.turno === "turno 1" ) {
      this.t1+=1;

      switch (registro.categoria) {
        case 'A': this.A+=1;
                  this.t1tot += 1500; 
          break;
        case 'B': this.B+=1; 
                  this.t1tot += 2100; 
          break;
        case 'C': this.C+=1; 
                  this.t1tot += 2700; 
          break;
        default:
          break;
      }
            
    } else if(registro.turno === "turno 2"){
      this.t2+=1;

      switch (registro.categoria) {
        case 'A': this.A+=1; 
                  this.t2tot += 1500; 
          break;
        case 'B': this.B+=1; 
                  this.t2tot += 2100; 
          break;
        case 'C': this.C+=1; 
                  this.t2tot += 2700; 
          break;
        default:
          break;
      }
    }
    
    
    
  }

}
