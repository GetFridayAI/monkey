import { Component, Input, OnInit } from '@angular/core';
import { Card, Provider } from '../card/card.model';
import { BANKS } from 'src/app/app.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card = {} as Card;

  constructor() { }

  ngOnInit(): void {
  }

  getBankLogo(bank: BANKS): string {
    let bank_logo_name = "";
    switch (bank) {
      case BANKS.ICICI:
        bank_logo_name = "icici";
        break;
      case BANKS.AXIS:
        bank_logo_name = "axis";
        break;
      case BANKS.CITI:
        bank_logo_name = "citi";
        break;
      case BANKS.HDFC:
        bank_logo_name = "hdfc";
        break;
      case BANKS.HSBC:
        bank_logo_name = "hsbc";
        break;
      case BANKS.KOTAK:
        bank_logo_name = "kotak";
        break;
      case BANKS.SBI:
        bank_logo_name = "sbi";
        break;
      case BANKS.UNION:
        bank_logo_name = "union";
        break;
      default:
        bank_logo_name = "icici";
        break;
    }
    return "assets/images/banks/" + bank_logo_name + ".svg";
  }

  getBankLogoClass(bank: BANKS): string {
    switch (bank) {
      case BANKS.ICICI:
        return "icici";
      case BANKS.AXIS:
        return "axis";
      case BANKS.CITI:
        return "citi";
      case BANKS.HDFC:
        return "hdfc";
      case BANKS.HSBC:
        return "hsbc";
      case BANKS.KOTAK:
        return "kotak";
      case BANKS.SBI:
        return "sbi";
      case BANKS.UNION:
        return "union";
      default:
        return "icici";
    }
  }

  getProviderLogo(provider: Provider): string {
    switch (provider) {
      case Provider.VISA:
        return "assets/visa_logo.svg";
      case Provider.MASTERCARD:
        return "assets/mastercard_logo.svg";
      default:
        return "assets/visa_logo.svg";
    }
  }

  getProviderClass(provider: Provider): string {
    switch (provider) {
      case Provider.VISA:
        return "visa";
      case Provider.MASTERCARD:
        return "mastercard";
      default:
        return "visa";
    }
  }

}
