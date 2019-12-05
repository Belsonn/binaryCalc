import { Component, OnInit } from "@angular/core";
import { parse } from "querystring";

@Component({
  selector: "app-calc",
  templateUrl: "./calc.component.html",
  styleUrls: ["./calc.component.css"]
})
export class CalcComponent implements OnInit {
  numberOneBin = "";
  numberTwoBin = "";
  numberOneDec = "";
  numberTwoDec = "";
  sumBin = "";
  sumDec = "";
  sum: boolean = false;
  constructor() {}

  ngOnInit() {}

  calcSumBin() {
    if (this.numberOneBin !== "" && this.numberTwoBin !== "") {
      let sum = parseInt(this.sumDec, 10);
      this.sumBin = sum.toString(2);
    }
  }

  calcSumDec() {
    if (this.numberOneDec !== "" && this.numberTwoDec !== "") {
      let sum = parseInt(this.numberOneDec) + parseInt(this.numberTwoDec);
      this.sumDec = sum.toString();
    }
  }

  calcSubDec() {
    if (this.numberOneDec !== "" && this.numberTwoDec !== ""){
      let sum = parseInt(this.numberOneDec) - parseInt(this.numberTwoDec);
      this.sumDec = sum.toString();
    }
  }

  convertToBinary() {
    if (this.numberOneDec !== "") {
      let number1 = parseInt(this.numberOneDec, 10);
      this.numberOneBin = number1.toString(2);
    }
    if (this.numberTwoDec !== "") {
      let number2 = parseInt(this.numberTwoDec, 10);
      this.numberTwoBin = number2.toString(2);
    }
  }
  convertToDecimal() {
    if (this.numberOneBin !== "") {
      let number1 = parseInt(this.numberOneBin, 2);
      this.numberOneDec = number1.toString(10);
    }
    if (this.numberTwoBin !== "") {
      let number2 = parseInt(this.numberTwoBin, 2);
      this.numberTwoDec = number2.toString(10);
    }
  }

  makeCalcDec() {
    this.convertToBinary();
    if (this.sum) {
      this.calcSumDec();
      this.calcSumBin();
    }
    else{
      this.calcSubDec();
      this.calcSumBin();
    }
  }
  makeCalcBin() {
    this.convertToDecimal();
    if (this.sum) {
      this.calcSumDec();
      this.calcSumBin();
    }
    else{
      this.calcSubDec();
      this.calcSumBin();
    }
  }

  checkNumberBin(event) {
    if (event.key !== "1" && event.key !== "Backspace" && event.key !== "0") {
      event.preventDefault();
    }
  }
  checkNumberDecimal(event) {
    if (
      event.key !== "1" &&
      event.key !== "Backspace" &&
      event.key !== "0" &&
      event.key !== "2" &&
      event.key !== "3" &&
      event.key !== "4" &&
      event.key !== "5" &&
      event.key !== "6" &&
      event.key !== "7" &&
      event.key !== "8" &&
      event.key !== "9"
    ) {
      event.preventDefault();
    }
  }
  addNumberOne() {
    if (this.numberOneDec !== "") {
      let num = parseInt(this.numberOneDec, 10) + 1;
      this.numberOneDec = num.toString();
      this.makeCalcDec();
    } else {
      this.numberOneDec = "1";
      this.makeCalcDec();
    }
  }
  addNumberTwo() {
    if (this.numberTwoDec !== "") {
      let num = parseInt(this.numberTwoDec, 10) + 1;
      this.numberTwoDec = num.toString();
      this.makeCalcDec();
    } else {
      this.numberTwoDec = "1";
      this.makeCalcDec();
    }
  }
  subNumberOne() {
    if (this.numberOneDec !== "") {
      let num = parseInt(this.numberOneDec, 10);
      if (num > 0) {
        num -= 1;
        this.numberOneDec = num.toString();
        this.makeCalcDec();
      }
    } else {
      this.numberOneDec = "0";
      this.makeCalcDec();
    }
  }
  subNumberTwo() {
    if (this.numberTwoDec !== "") {
      let num = parseInt(this.numberTwoDec, 10);
      if (num > 0) {
        num -= 1;
        this.numberTwoDec = num.toString();
        this.makeCalcDec();
      }
    } else {
      this.numberTwoDec = "0";
      this.makeCalcDec();
    }
  }

  sumToTrue() {
    this.sum = true;
    this.makeCalcDec();
    this.makeCalcBin();
  }
  sumToFalse() {
    this.sum = false;
    this.makeCalcDec();
    this.makeCalcBin();
  }
}
