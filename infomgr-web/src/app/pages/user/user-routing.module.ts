import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyListComponent } from 'src/app/pages/user/family/family-list/family-list.component'
import { FriendListComponent } from 'src/app/pages/user/friend/friend-list/friend-list.component'
import { ClassmateListComponent } from 'src/app/pages/user/classmate/classmate-list/classmate-list.component'


const routes: Routes = [
  {
    path: 'family-list',
    component: FamilyListComponent
  },
  {
    path: 'friend-list',
    component: FriendListComponent
  },
  {
    path: 'classmate-list',
    component: ClassmateListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
