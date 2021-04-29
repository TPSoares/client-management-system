import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-container',
  templateUrl: './client-container.component.html',
  styleUrls: ['./client-container.component.scss'],
  providers: [ ClientService ]
})
export class ClientContainerComponent implements OnInit {

  @Input() client: any;

  constructor(private service: ClientService) { }

  ngOnInit() {
    console.log(this.client)
  }

  public deleteClient() {
    console.log(this.client.id)
    this.service.deleteClient(this.client.id);
  }

}
