import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

investmentResults = input<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment:number,
    totalInterest: number,
    totalAmountInvested: number,
  }[]>();
  // @Input() investmentResults? : {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment:number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]; 

}
