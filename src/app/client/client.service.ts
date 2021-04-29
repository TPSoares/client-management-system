import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ClientDto } from './dto/ClientDto';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _collection: string = 'clients';

  constructor(private fireStore: AngularFirestore) { 

  }

  public getClientList(): Observable<DocumentChangeAction<ClientDto>[]> {
    return this.fireStore.collection<ClientDto>(this._collection).snapshotChanges();
  }

  public deleteClient(id: string) {
    this.fireStore.doc(`${this._collection}/${id}`).delete();
  }
}
