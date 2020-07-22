import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

const zorroModuleList = [
  NzIconModule,
  NzLayoutModule,
  NzGridModule,
  NzFormModule,
  NzTableModule,
  NzMenuModule,
  NzButtonModule,
  NzInputModule,
  NzSelectModule,
  NzModalModule,
  NzMessageModule,
  NzNotificationModule,
  NzDatePickerModule,

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    zorroModuleList
  ],
  exports: [
    zorroModuleList
  ]
})
export class ZorroModule { }
