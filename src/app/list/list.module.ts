import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { CanDeactivateGuard } from '../can-deactivate.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage,
        canDeactivate: [CanDeactivateGuard]
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
