import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.intrface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  pais!: Country;

  constructor( private activateRoute: ActivatedRoute, private servicesPais: PaisService) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap( (param)=> this.servicesPais.getPaiesCode(param["id"])),
      tap(console.log)
    )
    .subscribe( pais =>{
      this.pais = pais[0]
      console.log(pais[0])
    });

    //id esta desestructurado, puede funcinar si imprimimos params.id 
    // this.activateRoute.params.subscribe( ({id}) =>{
    //   console.log(id)

    //   this.servicesPais.getPaiesCode(id).subscribe(pais=>{
    //     console.log(pais);
    //   });
    // } )


  }

}
