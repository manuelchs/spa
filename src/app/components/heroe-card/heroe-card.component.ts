import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() idx:number;

  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate(['/heroe',this.idx]);
    //this.heroeSeleccionado.emit(this.idx);
  }

}
