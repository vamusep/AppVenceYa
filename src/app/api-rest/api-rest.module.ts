import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiRestPageRoutingModule } from './api-rest-routing.module';

import { ApiRestPage } from './api-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiRestPageRoutingModule
  ],
  declarations: [ApiRestPage]
})
export class ApiRestPageModule {}
