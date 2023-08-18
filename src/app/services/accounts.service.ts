import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AccountDataModel } from '../model/accountDataModel';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  //private apiURL = environment.API_URL;
  constructor(private db: AngularFireDatabase) { }

  getAccount(): Observable<any> {
    return this.db.list('0').snapshotChanges()
      .pipe(map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as AccountDataModel }));
      }));
  }

  insert(account: AccountDataModel) {
    this.db.list('accounts').push(account)
    // .then((result: any) => {

    // }
  }

  update(account: AccountDataModel, key: string) {
    this.db.list('accounts').update(key, account)
      .catch((error: any) => {
        console.error(error);
      });
  }

  delete(key: string) {
    this.db.object(`accounts/${key}`).remove();
  }
}
