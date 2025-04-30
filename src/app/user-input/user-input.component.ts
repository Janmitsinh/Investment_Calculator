import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<InvestmentInput>()
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInterestRate = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration =signal('10');


  onSubmit(){
    this.calculate.emit({
      enteredInitialInvestment: +this.enteredInitialInvestment(),
      enteredAnnualInterestRate: +this.enteredAnnualInterestRate(),
      enteredExpectedReturn: +this.enteredExpectedReturn(),
      enteredDuration: +this.enteredDuration()
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInterestRate.set('0');
    this.enteredExpectedReturn.set('5');  
    this.enteredDuration.set('10');
  }
}
