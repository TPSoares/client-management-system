import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientDto } from '../dto/ClientDto';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-client',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  providers: [ ClientService ]
  
})
export class ClientListComponent implements OnInit {

  public clientList: Array<ClientDto> = [];

  constructor(
    private service: ClientService, 
    public alertController: AlertController,
    public toastController: ToastController
  ) { }

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

  public deleteClient(id: string) {
    this.service.deleteClient(id).then(() => {
      this.deleteToast();
    });
  }

  public async deleteAlert(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'delete-alert',
      header: 'Confirmar Exclusão',
      message: 'O cliente será deletado.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          
        }, {
          text: 'Confirmar',
          role: 'confirmar'
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
    if (role === 'confirmar') {
      this.deleteClient(id);
    }
  }

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Cliente deletado.',
      duration: 3000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
