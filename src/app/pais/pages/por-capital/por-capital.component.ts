import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.intrface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] =[];

  constructor( private paisService: PaisService) { }

  buscar(termino: string){

    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscaCapital(termino).subscribe(pais => {
      this.paises = pais;
      console.log(pais);
    }, error =>{
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(terino: string){
    this.hayError = false;
  }


}
