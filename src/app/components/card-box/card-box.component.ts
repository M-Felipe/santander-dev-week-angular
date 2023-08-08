import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {

  constructor(private service: CardsService) { }

  accountData: AccountDataModel = {
    name: 'Fulano de Tal',
    account: {
      agency: '0001',
      number: '123456-7'
    },
    card: {
      limit: 1000,
      number: '1234 5678 9012 3456'.split(' ', 4)
    }
  };

  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData() {
    this.service.getCard().subscribe(data => {
      this.accountData.name = data.name;
      this.accountData.account.agency = data.account.agency;
      this.accountData.account.number = data.account.number;
      this.accountData.card.limit = data.card.limit;
      this.accountData.card.number = data.card.number.split(' ', 4);
    });
  }

}
