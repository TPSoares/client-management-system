import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientNewComponent } from './client-new/client-new.component';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientNewComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ClientModule { }
