import { Component, OnInit } from '@angular/core';
import { BANKS, PAYMENT_MODES, SPEND_TYPE, UPCOMING_TIME_FILTERS, Expense, EXPENSE_TABLE_HEADERS, ExpenseTabularRenderModel } from 'src/app/app.model';
import { formatDate } from 'src/app/app.utils';

@Component({
  selector: 'upcoming-expenses',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingExpensesComponent implements OnInit {

  expenses: Array<Expense> = [
    {
      name: "ICICI Card Payment",
      amount: "20000",
      date: "Sat Nov 04 2023 11:52:10 GMT+0530 (India Standard Time)",
      paymentMode: PAYMENT_MODES.BANK_ACCOUNT,
      paymentInstrument: BANKS.ICICI,
      type: SPEND_TYPE.PAYMENT
    },
    {
      name: "Axis Card Payment",
      amount: "32000",
      date: "Sat Nov 08 2023 11:52:10 GMT+0530 (India Standard Time)",
      paymentMode: PAYMENT_MODES.BANK_ACCOUNT,
      paymentInstrument: BANKS.ICICI,
      type: SPEND_TYPE.PAYMENT
    },
    {
      name: "HDFC Auto Loan EMI",
      amount: "11089",
      date: "Sat Nov 08 2023 11:52:10 GMT+0530 (India Standard Time)",
      paymentMode: PAYMENT_MODES.BANK_ACCOUNT,
      paymentInstrument: BANKS.ICICI,
      type: SPEND_TYPE.PAYMENT
    },
    {
      name: "Wellsfargo IPO",
      amount: "15000",
      date: "Sat Nov 10 2023 11:52:10 GMT+0530 (India Standard Time)",
      paymentMode: PAYMENT_MODES.BANK_ACCOUNT,
      paymentInstrument: BANKS.ICICI,
      type: SPEND_TYPE.INVESTMENT
    },
    {
      name: "Tata Motors Stock Purchase",
      amount: "5000",
      date: "Sat Nov 15 2023 11:52:10 GMT+0530 (India Standard Time)",
      paymentMode: PAYMENT_MODES.BANK_ACCOUNT,
      paymentInstrument: BANKS.ICICI,
      type: SPEND_TYPE.INVESTMENT
    },
    {
      name: "PPF Monthly Saving",
      amount: "6000",
      date: "Sat Nov 20 2023 11:52:10 GMT+0530 (India Standard Time)",
      paymentMode: PAYMENT_MODES.BANK_ACCOUNT,
      paymentInstrument: BANKS.ICICI,
      type: SPEND_TYPE.INVESTMENT
    },
    {
      name: "Aditya Birla SIP",
      amount: "500",
      date: "Sat Nov 25 2023 11:52:10 GMT+0530 (India Standard Time)",
      paymentMode: PAYMENT_MODES.BANK_ACCOUNT,
      paymentInstrument: BANKS.ICICI,
      type: SPEND_TYPE.INVESTMENT
    },
    {
      name: "HSBC Card Payment",
      amount: "50000",
      date: "Sat Nov 30 2023 11:52:10 GMT+0530 (India Standard Time)",
      paymentMode: PAYMENT_MODES.BANK_ACCOUNT,
      paymentInstrument: BANKS.HSBC,
      type: SPEND_TYPE.PAYMENT
    }
  ];

  filters: Array<string> = [];
  selectedFilter: string = UPCOMING_TIME_FILTERS[1];
  expensesRenderData!: Array<ExpenseTabularRenderModel>;
  expenseTableHeaders: Array<string> = EXPENSE_TABLE_HEADERS;

  constructor() { }

  ngOnInit(): void {
    Object.values(UPCOMING_TIME_FILTERS).filter((val) => { return isNaN(Number(val)) }).map((value: string | UPCOMING_TIME_FILTERS) => {
      this.filters.push(value as string);
    });
    this.expensesRenderData = [];
    this.expenses.map((expense: Expense) => {
      const expenseRow: ExpenseTabularRenderModel = {
        name: expense.name,
        type: this.getExpenseType(expense.type),
        date: formatDate(expense.date),
        amount: expense.amount,
        paymentMode: this.getPaymentMode(expense.paymentMode, expense.paymentInstrument)
      };
      this.expensesRenderData.push(expenseRow);
    })
  }

  setTimeFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  getFormattedDate(date: string): string {
    return formatDate(date);
  }

  getPaymentMode(mode: PAYMENT_MODES, instrument: BANKS): string {
    return BANKS[instrument] + " " + ((mode === PAYMENT_MODES.BANK_ACCOUNT) ? "Account" : "Card");
  }

  getExpenseType(type: SPEND_TYPE): string {
    return SPEND_TYPE[type].slice(0, 1) + SPEND_TYPE[type].slice(1).toLowerCase();
  }
}
