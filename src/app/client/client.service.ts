import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ClientDto } from './dto/ClientDto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _collection: string = 'clients';

  constructor(private fireStore: AngularFirestore) { 

  }

  public getClientList(): Observable<any> {
    return this.fireStore.collection(this._collection).snapshotChanges()
  }

  public getClient(id: string): Promise<any> {
    return this.fireStore.doc(`${this._collection}/${id}`).ref.get().then((res) => {
      return res.data();
    })
  }

  public saveClient(client): Promise<any> {
    return this.fireStore.collection<any>(this._collection).add({
      name: client.name,
      email: client.email,
      phone: client.phone,
      birth_date: client.birth_date
    })
  }

  public updateClient(id: string, data): Promise<any> {
    return this.fireStore.doc(`${this._collection}/${id}`).update(data);
  }

  public deleteClient(id: string): Promise<any> {
    return this.fireStore.doc(`${this._collection}/${id}`).delete();
  }
}
