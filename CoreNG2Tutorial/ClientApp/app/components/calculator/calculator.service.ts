﻿import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class CalculatorService {
    private calculateUrl = "/api/calculator/";

    constructor(private http: Http) { }

    addNumbers(first: number, second: number): Promise<any> {
        return this.http
                   .post(this.calculateUrl + "add",
                         JSON.stringify({ "firstNumber": first, "secondNumber": second }),
                         { headers: new Headers({ 'Content-Type': 'application/json' }) })
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}