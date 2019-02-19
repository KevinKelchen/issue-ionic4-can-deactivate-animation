import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BonusPage } from './bonus.page';
import { CanDeactivateGuard } from '../can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: BonusPage,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BonusPage]
})
export class BonusPageModule {}
