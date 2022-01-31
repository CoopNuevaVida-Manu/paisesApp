import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebonuce: EventEmitter<string> = new EventEmitter()

  @Input() placeholder: string = "";

  termino : string = '';
  debouncer: Subject<string> = new Subject();
  
  ngOnInit() {
    this.debouncer.pipe(debounceTime(400)).subscribe(valor => {
      this.onDebonuce.emit(valor);
    })
  }
  
  buscar(){
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(){
    this.debouncer.next(this.termino)
  }

}
