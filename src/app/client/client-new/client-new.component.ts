import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientDto } from '../dto/ClientDto';
import { ClientService } from '../client.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.scss'],
  providers: [ ClientService ]
})
export class ClientNewComponent implements OnInit {

  public readonly emailPattern: string = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*";

  public isEditing: string;
  public client: ClientDto = new ClientDto();

  public clientInfo = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(15)]),
    birth_date: new FormControl('', Validators.required),
  })

  constructor(
    private service: ClientService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    public toastController: ToastController,
    public alertController: AlertController,
    ) { }

  ngOnInit() {
    this.isEditing = this.activatedRoute.snapshot.params['id'];

    if (this.isEditing) {
      this.service.getClient(this.isEditing).then(client => {
        this.client = client;

        this.clientInfo.setValue({
          name: this.client.name,
          email: this.client.email,
          phone: this.client.phone,
          birth_date: this.client.birth_date
        })
      })
    }
  }

  public submitForm() {
    if(this.isEditing) {
      this.service.updateClient(this.isEditing, this.clientInfo.value).then(() => {
        this.router.navigateByUrl('/clients');
        this.showToast();
      });
    } else {
      this.service.saveClient(this.clientInfo.value).then(() => {
        this.router.navigateByUrl('/clients');
        this.showToast();
      });
    }
  }

  async showToast() {
    let message = this.isEditing ? 'Cliente atualizado com sucesso.' : 'Cliente criado com sucesso.';
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'success',
      position: 'top',
    });
    toast.present();
  }

  async cancelWarning() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      message: 'Deseja cancelar a ação?',
      buttons: [
        {
          text: 'Não',
          role: 'cancelar',
          
        }, {
          text: 'Sim',
          role: 'confirmar'
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
    if (role === 'confirmar') {
      this.router.navigateByUrl('/clients');
    }
  }

}
