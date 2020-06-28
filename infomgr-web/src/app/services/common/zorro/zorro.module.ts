import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';

const moduleList = [
  NzIconModule,
  NzLayoutModule,
  NzGridModule,
  NzFormModule,
  NzTableModule,
  NzMenuModule,
  NzButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    moduleList
  ],
  exports: [
    moduleList
  ]
})
export class ZorroModule { }
