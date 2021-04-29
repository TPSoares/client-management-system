import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientNewComponent } from './client/client-new/client-new.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clients',
        component: ClientListComponent
      },
      {
        path: 'clients/new',
        component: ClientNewComponent
      },
      {
        path: 'clients/:id',
        component: ClientNewComponent
      },
      {
        path: '**',
        redirectTo: '/clients',
        pathMatch: 'full'
      }
    ]
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
