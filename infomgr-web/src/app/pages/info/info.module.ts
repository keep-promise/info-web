import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZorroModule } from 'src/app/services/common/zorro/zorro.module';

import { InfoRoutingModule } from 'src/app/pages/info/info-routing.module';

import { QqListComponent } from './qq/qq-list/qq-list.component';
import { QqEditComponent } from './qq/qq-edit/qq-edit.component';

@NgModule({
  declarations: [QqListComponent, QqEditComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    ZorroModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InfoModule { }
