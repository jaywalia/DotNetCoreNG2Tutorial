﻿import { Component } from "@angular/core";

import { CalculatorService } from "./calculator.service";

@
Component({
    selector: "calculator",
    template: require("./calculator.component.html")
}) 
export class CalculatorComponent {
    title: string = "Welcome to Calculator from Component";
    first: number;
    second: number;
    result: number;
    constructor(
        private calculatorService: CalculatorService
    ) { }

    add(): void {
        this.calculatorService
            .addNumbers(this.first, this.second)
            .then(res => this.result = res);
    }

    subtract(): void {
        this.calculatorService
            .subtractNumbers(this.first, this.second)
            .then(res => this.result = res);
    }

    multiply(): void {
        this.calculatorService
            .multiplyNumbers(this.first, this.second)
            .then(res => this.result = res);
    }

    divide(): void {
        this.calculatorService
            .divideNumbers(this.first, this.second)
            .then(res => this.result = res);
    }
}