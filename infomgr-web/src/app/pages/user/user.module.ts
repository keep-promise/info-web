import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZorroModule } from 'src/app/services/common/zorro/zorro.module';


import { UserRoutingModule } from './user-routing.module';
import { FamilyListComponent } from './family/family-list/family-list.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { ClassmateListComponent } from './classmate/classmate-list/classmate-list.component'
import { FamilyEditComponent } from './family/family-edit/family-edit.component'

import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ClassmateEditComponent } from './classmate/classmate-edit/classmate-edit.component';

@NgModule({
  declarations: [
    FamilyListComponent,
    FriendListComponent,
    ClassmateListComponent,
    FamilyEditComponent,
    ClassmateEditComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ZorroModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NzMessageService, NzModalService, NzNotificationService],
})
export class UserModule { }
