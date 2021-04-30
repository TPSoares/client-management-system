import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientDto } from '../dto/ClientDto';
import { ClientService } from '../client.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.scss'],
  providers: [ ClientService ]
})
export class ClientNewComponent implements OnInit {

  public isEditing: string;
  public client: ClientDto = new ClientDto();

  @ViewChild('email', { read: ElementRef }) email: ElementRef;


  public clientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl('', Validators.required),
    birth_date: new FormControl('', Validators.required),
  });

  constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.isEditing = this.activatedRoute.snapshot.params['id'];
    console.log(this.isEditing)
  }

  public submitForm() {
    console.log(this.clientForm.value)
    this.service.saveClient(this.clientForm.value).then(res => {
      this.router.navigateByUrl('/clients');
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cliente criado com sucesso.',
      duration: 3000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
