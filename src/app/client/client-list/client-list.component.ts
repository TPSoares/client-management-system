import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {

  public clientList: Array<any> = [];

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.service.getClientList().subscribe(result => {
      this.clientList = result;
      console.log(this.clientList)
    })
  }

}
