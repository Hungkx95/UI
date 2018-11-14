import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   // Number of cards to be generated with column and rows to be covered  
   cards = [  
    { title: 'Card 1', cols: 2, rows: 1 },  
    { title: 'Card 2', cols: 1, rows: 1 },  
    { title: 'Card 3', cols: 1, rows: 2 },  
    { title: 'Card 4', cols: 1, rows: 1 }  
  ];  
}
