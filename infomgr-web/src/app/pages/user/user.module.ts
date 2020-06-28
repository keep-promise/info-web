import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FamilyListComponent } from './family/family-list/family-list.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { ClassmateListComponent } from './classmate/classmate-list/classmate-list.component'
import { ZorroModule } from 'src/app/services/common/zorro/zorro.module'

@NgModule({
  declarations: [
    FamilyListComponent,
    FriendListComponent,
    ClassmateListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ZorroModule
  ]
})
export class UserModule { }
