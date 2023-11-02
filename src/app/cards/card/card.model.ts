import { BANKS } from "../../app.model";

export class Card {
    number!: string;
    expiryDate!: number;
    expiryMonth!: number;
    bank!: BANKS;
    provider!: Provider;
    nfcEnabled!: boolean;
}

export enum Provider {
    VISA = 1,
    MASTERCARD = 2
}