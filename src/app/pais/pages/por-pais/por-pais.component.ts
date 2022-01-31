import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.intrface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})


export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] =[];

  paisesSugeridos: Country[] =[];

  constructor( private paisService: PaisService) { }

  buscar(termino: string){

    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscaPais(termino).subscribe(pais => {
      this.paises = pais;
      console.log(pais);
    }, error =>{
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;

    this.paisService.buscaPais(termino).subscribe(paises => this.paisesSugeridos = paises.splice(0,5), err=>{this.paisesSugeridos = []})
  }

}
