import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {



@Input() pais;

  constructor() {
   }

  ngOnInit(): void {
  }

}
