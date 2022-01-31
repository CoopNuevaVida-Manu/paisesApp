import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.intrface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-regio',
  templateUrl: './por-regio.component.html',
  styles: [
  ]
})
export class PorRegioComponent {

  regiones: string[] = ['EU' ,'CARIC' ,'PA' ,'EEU' ,'AL' ,'CAIS' ,'CEFTA' ,'NAFTA' ,'SAARC']
  regionActiva: string = '';
  paises: Country[] = [];

  getClassCSS(region: string):string{
    return region === this.regionActiva ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2'
  }

  constructor(private ServicesPais: PaisService) { }

  activarRegion( region:string){

    if(region === this.regionActiva){
      return;
    }

    this.regionActiva = region;
    this.paises=[];
    this.ServicesPais.buscaRegion(region).subscribe(pais => {
      this.paises = pais;
      console.log(pais);
    }, error =>{
      this.paises = [];
    });

  }

}
