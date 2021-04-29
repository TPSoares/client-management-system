import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientContainerComponent } from './client-container/client-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientNewComponent,
    ClientContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class ClientModule { }
