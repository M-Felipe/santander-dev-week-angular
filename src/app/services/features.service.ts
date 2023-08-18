import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/enviroments';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AccountDataModel } from '../model/accountDataModel';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {


  constructor(private db: AngularFireDatabase) { }

  getFeature(): Observable<any> {
    return this.db.list('0').snapshotChanges()
      .pipe(map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as AccountDataModel }));
      }));
  }

}
