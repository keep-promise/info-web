import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyListComponent } from 'src/app/pages/user/family/family-list/family-list.component'
import { FamilyEditComponent } from 'src/app/pages/user/family/family-edit/family-edit.component';
import { FriendListComponent } from 'src/app/pages/user/friend/friend-list/friend-list.component'
import { ClassmateListComponent } from 'src/app/pages/user/classmate/classmate-list/classmate-list.component'
import { ClassmateEditComponent } from 'src/app/pages/user/classmate/classmate-edit/classmate-edit.component'

const routes: Routes = [
  {
    path: 'family-list',
    component: FamilyListComponent
  },
  {
    path: 'family-edit',
    component: FamilyEditComponent
  },
  {
    path: 'friend-list',
    component: FriendListComponent
  },
  {
    path: 'classmate-list',
    component: ClassmateListComponent
  },
  {
    path: 'classmate-edit',
    component: ClassmateEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
