import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _collection: string = 'clients';

  constructor(private fireStore: AngularFirestore) { 

  }

  public getClientList(): Observable<any> {
    return this.fireStore.collection(this._collection).valueChanges();
  }
}
