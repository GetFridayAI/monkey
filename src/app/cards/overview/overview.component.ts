import { Component, OnInit } from '@angular/core';
import { Card, Provider } from '../card/card.model';
import { BANKS } from 'src/app/app.model';

@Component({
  selector: 'cards-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class CardsOverviewComponent implements OnInit {

  card: Card = {
    number: "XXXX XXXX XXXX 6356",
    expiryDate: 5,
    expiryMonth: 10,
    bank: BANKS.UNION,
    provider: Provider.MASTERCARD,
    nfcEnabled: true
  }

  constructor() { }

  ngOnInit(): void {
  }
}
