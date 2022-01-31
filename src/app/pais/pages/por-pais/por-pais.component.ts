import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.intrface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})


export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] =[];

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


}
