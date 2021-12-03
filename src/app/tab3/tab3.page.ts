import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  constructor() {}

  Hoteles =  [{"nombre": "Hotel W",
  "llegada": "19/04/2022",
  "salida": "22/04/2022",
  "img": "w.jpg",
  "habitaciones": 1,
  "adultos": 2,
  "niños": 0
},{"nombre": "Hotel Picasso",
"llegada": "17/08/2022",
"salida": "21/08/2022",
"img": "picasso.jpg",
"habitaciones": 2,
"adultos": 4,
"niños": 2
}];

  ngOnInit() {
  }
  remove(i){
    this.Hoteles.splice(i,1);
  }
}
