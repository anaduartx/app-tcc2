import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumoPageRoutingModule } from './resumo-routing.module';

import { ResumoPage } from './resumo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumoPageRoutingModule
  ],
  declarations: [ResumoPage]
})
export class ResumoPageModule {}
