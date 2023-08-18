import { Component, OnInit } from '@angular/core';
import { AmountDataModel } from 'src/app/model/AmmountDataModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css']
})
export class AmountBoxComponent implements OnInit {

  accountDetails: AmountDataModel = {
    amountValue: 0,
    limit: 0,
    totalAmount: 0
  }

  constructor(private service: AccountsService) { }

  ngOnInit(): void {
    this.getAmountValues();
  }

  getAmountValues() {
    this.service.getAccount().subscribe(data => {
      data = data.find((s: any) => s.key === "account");
      this.accountDetails.amountValue = data.balance;
      this.accountDetails.limit = data.limit;
      this.accountDetails.totalAmount = this.accountDetails.amountValue + this.accountDetails.limit;
    });
  }
}
