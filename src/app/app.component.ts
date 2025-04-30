import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentInput } from './investment-input.model';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent]
})
export class AppComponent {

  resultsData = signal<{
      year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment:number,
      totalInterest: number,
      totalAmountInvested: number,
    }[] | undefined>(undefined);
  
  calculateInvestmentResults(data : InvestmentInput) {

    const { enteredAnnualInterestRate, enteredExpectedReturn, enteredDuration, enteredInitialInvestment } = data;
    const annualData = [];
    let investmentValue = enteredInitialInvestment;
  
    for (let i = 0; i < Number(enteredDuration); i++) {
      const year = i + 1;
      const interestEarnedInYear = Number(investmentValue) * (enteredExpectedReturn / 100);
      investmentValue += interestEarnedInYear + enteredAnnualInterestRate;
      const totalInterest =
      Number(investmentValue) - enteredAnnualInterestRate * year - enteredInitialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment:enteredAnnualInterestRate,
        totalInterest: totalInterest,
        totalAmountInvested: enteredInitialInvestment + enteredAnnualInterestRate * year,
      });
    }
  
    this.resultsData.set(annualData);
  }
}
