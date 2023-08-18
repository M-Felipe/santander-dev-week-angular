import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/enviroments';
import { Observable, map } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AccountDataModel } from '../model/accountDataModel';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private db: AngularFireDatabase) { }

  getCard(): Observable<any> {
    return this.db.list('0').snapshotChanges()
      .pipe(map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as AccountDataModel }));
      }));
  }
}
