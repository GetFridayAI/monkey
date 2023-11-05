export enum BANKS {
    ICICI = 1,
    SBI = 2,
    KOTAK = 3,
    AXIS = 4,
    HSBC = 5,
    HDFC = 6,
    UNION = 7,
    CITI = 8,
    OTHERS = 9
}

export enum PAYMENT_MODES {
    BANK_ACCOUNT = 1,
    CREDIT_CARD = 2
}

export enum SPEND_TYPE {
    EXPENSE = 1,
    INVESTMENT = 2,
    SAVING = 3,
    PAYMENT = 4
}

export enum UPCOMING_TIME_FILTERS {
    "Tomorrow" = 1,
    "This Week" = 2,
    "Next Week" = 3,
    "This Month" = 4,
}

export class Expense {
    name!: string;
    amount!: string;
    date!: string;
    paymentMode!: PAYMENT_MODES;
    paymentInstrument!: BANKS;
    type!: SPEND_TYPE;
}

export class ExpenseTabularRenderModel {
    name!: string;
    amount!: string;
    date!: string;
    paymentMode!: string;
    type!: string;
}

export const EXPENSE_TABLE_HEADERS = ["Name", "Spend Type", "Date", "Amount", "Payment Mode"];