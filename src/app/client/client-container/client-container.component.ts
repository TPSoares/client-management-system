import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-container',
  templateUrl: './client-container.component.html',
  styleUrls: ['./client-container.component.scss'],
  providers: [ ClientService ]
})
export class ClientContainerComponent implements OnInit {

  @Input() client: any;

  constructor(
    private service: ClientService, 
    public alertController: AlertController,
    public toastController: ToastController) { }

  ngOnInit() {
  
  }

  public deleteClient() {
    this.service.deleteClient(this.client.id).then(() => {
      this.presentToast();
    });
  }

  public async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
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
      this.deleteClient();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cliente deletado.',
      duration: 3000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
