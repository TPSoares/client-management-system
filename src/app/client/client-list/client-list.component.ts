import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientDto } from '../dto/ClientDto';

@Component({
  selector: 'app-client',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  
})
export class ClientListComponent implements OnInit {

  public clientList: Array<ClientDto> = [];

  constructor(private service: ClientService) { }

  ngOnInit() {
    
    this.service.getClientList().subscribe(result => {

      this.clientList = [];

      result.map(res => {
        this.clientList.push({
          id: res.payload.doc.id,
          name: res.payload.doc.data().name,
          email: res.payload.doc.data().email,
          phone: res.payload.doc.data().phone,
          birth_date: res.payload.doc.data().birth_date,
        })
      })
    })
  }
}
