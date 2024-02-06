import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
title = 'List of Fruits';
fruits = ['Mango','Apple','Orange','Strawberry'];

num=0;

show="true";

firstName= 'Thana';
 lastName='Lakshmi';

head='Fullstack Developer';

name='Hello World';

count=0;
click () {
  this.count++;
}
click1() {
  this.count--;
}

           toDate = new Date();
message = 'Hi Hello';
cash = 500;
}
