import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';
import { MessageComponent } from '../shared/error-message.component';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientNewComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule
  ]
})
export class ClientModule { }
