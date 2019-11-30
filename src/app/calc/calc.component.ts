import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  numberOne = '';
  numberTwo = '';
  sum = '';
  toggleButton = false;
  constructor() { }

  ngOnInit() {
  }

  calcSum(){
    let number1 = parseInt(this.numberOne,2);
    let number2 = parseInt(this.numberTwo, 2);
    let sum1 = number1 + number2;
    return this.sum = sum1.toString(2);
  }

  checkNumber(event) {
    if(event.key !== '1' && event.key !== 'Backspace' && event.key !== '0') {
      event.preventDefault();
    }
    this.toggleBtn();
  }
  toggleBtn() {
    if(this.numberOne !== '' && this.numberTwo!== ''){
      this.toggleButton = true;
    }
  }

}
